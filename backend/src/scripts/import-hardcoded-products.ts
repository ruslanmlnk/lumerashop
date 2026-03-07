import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'
import { ALL_PRODUCTS, FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS } from '../../../data/site-data'
import type { Product as StaticProduct } from '../../../types/site'

const slugify = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const parsePrice = (value: string): number => {
  const numeric = Number(value.replace(/\s+/g, '').replace(',', '.').replace(/[^\d.]/g, ''))
  if (Number.isFinite(numeric) && numeric > 0) {
    return Math.round(numeric)
  }

  const fallback = Number(value.replace(/[^\d]/g, ''))
  return Number.isFinite(fallback) ? fallback : 0
}

const toSpecificationsArray = (product: StaticProduct) =>
  Object.entries(product.specifications ?? {}).map(([key, val]) => ({
    key,
    value: String(val),
  }))

async function main() {
  const payload = await getPayload({ config })

  const featuredSlugs = new Set(FEATURED_PRODUCTS.map((item) => item.slug))
  const recommendedSlugs = new Set(RECOMMENDED_PRODUCTS.map((item) => item.slug))

  const categoryCache = new Map<string, number>()
  const filterGroupCache = new Map<string, number>()
  const filterOptionCache = new Map<string, number>()

  const getOrCreateCategory = async (name: string): Promise<number> => {
    const cacheKey = name.trim()
    if (categoryCache.has(cacheKey)) {
      return categoryCache.get(cacheKey)!
    }

    const slug = slugify(name)
    const found = await payload.find({
      collection: 'categories',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
    })

    if (found.docs[0]) {
      const id = Number(found.docs[0].id)
      categoryCache.set(cacheKey, id)
      return id
    }

    const created = await payload.create({
      collection: 'categories',
      data: {
        name,
        slug,
      },
    })

    const id = Number(created.id)
    categoryCache.set(cacheKey, id)
    return id
  }

  const getOrCreateFilterGroup = async (name: string): Promise<number> => {
    const cacheKey = name.trim()
    if (filterGroupCache.has(cacheKey)) {
      return filterGroupCache.get(cacheKey)!
    }

    const slug = slugify(name)
    const found = await payload.find({
      collection: 'filter-groups' as never,
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
    })

    if (found.docs[0]) {
      const id = Number(found.docs[0].id)
      filterGroupCache.set(cacheKey, id)
      return id
    }

    const created = await payload.create({
      collection: 'filter-groups' as never,
      data: {
        name,
        slug,
        isActive: true,
      },
    })

    const id = Number(created.id)
    filterGroupCache.set(cacheKey, id)
    return id
  }

  const getOrCreateFilterOption = async (groupName: string, optionName: string): Promise<number> => {
    const cacheKey = `${groupName}::${optionName}`
    if (filterOptionCache.has(cacheKey)) {
      return filterOptionCache.get(cacheKey)!
    }

    const groupId = await getOrCreateFilterGroup(groupName)
    const optionSlug = `${slugify(groupName)}-${slugify(optionName)}`

    const found = await payload.find({
      collection: 'filter-options' as never,
      where: {
        and: [{ slug: { equals: optionSlug } }, { group: { equals: groupId } }],
      },
      limit: 1,
      depth: 0,
    })

    if (found.docs[0]) {
      const id = Number(found.docs[0].id)
      filterOptionCache.set(cacheKey, id)
      return id
    }

    const created = await payload.create({
      collection: 'filter-options' as never,
      data: {
        name: optionName,
        slug: optionSlug,
        group: groupId,
        isActive: true,
      },
    })

    const id = Number(created.id)
    filterOptionCache.set(cacheKey, id)
    return id
  }

  let createdCount = 0
  let updatedCount = 0

  for (const product of ALL_PRODUCTS) {
    const categoryId = await getOrCreateCategory(product.category)
    const specs = toSpecificationsArray(product)

    const filterOptionIds: number[] = []
    for (const spec of specs) {
      const optionId = await getOrCreateFilterOption(spec.key, spec.value)
      filterOptionIds.push(optionId)
    }

    const galleryData = (product.gallery ?? [])
      .filter((value): value is string => typeof value === 'string' && value.length > 0)
      .map((imageUrl) => ({ imageUrl }))

    const existing = await payload.find({
      collection: 'products',
      where: { slug: { equals: product.slug } },
      limit: 1,
      depth: 0,
    })

    const data = {
      name: product.name,
      slug: product.slug,
      price: parsePrice(product.price),
      sku: product.sku ?? undefined,
      description: product.description ?? undefined,
      category: categoryId,
      imageUrl: product.image,
      gallery: galleryData,
      specifications: specs,
      filterOptions: filterOptionIds,
      status: 'published' as const,
      isFeatured: featuredSlugs.has(product.slug),
      isRecommended: recommendedSlugs.has(product.slug),
      stockQuantity: 10,
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'products',
        id: existing.docs[0].id,
        data,
      })
      updatedCount += 1
    } else {
      await payload.create({
        collection: 'products',
        data,
      })
      createdCount += 1
    }
  }

  console.log(`Import complete. Created: ${createdCount}, Updated: ${updatedCount}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Import failed:', error)
    process.exit(1)
  })
