import type { CollectionConfig, Validate } from 'payload'

const requireImageSource: Validate<string | null | undefined, unknown, unknown, unknown> = (value, { siblingData }) => {
  if (value || siblingData?.mainImage) {
    return true
  }

  return 'Add a main image upload or external image URL.'
}

const requireMainImage: Validate<number | null | undefined, unknown, unknown, unknown> = (value, { siblingData }) => {
  if (value || siblingData?.imageUrl) {
    return true
  }

  return 'Add a main image upload or external image URL.'
}

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'category', 'status', 'stockStatus', 'isFeatured', 'isRecommended', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Product name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug (URL)',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'price',
          type: 'number',
          required: true,
          label: 'Price (CZK)',
        },
        {
          name: 'oldPrice',
          type: 'number',
          label: 'Old price',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'sku',
          type: 'text',
          label: 'SKU',
        },
        {
          name: 'stockQuantity',
          type: 'number',
          label: 'Stock quantity',
          defaultValue: 0,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'purchaseCount',
          type: 'number',
          label: 'Purchase count',
          defaultValue: 0,
          min: 0,
          admin: {
            width: '50%',
            description: 'Used for popularity sorting on the storefront.',
          },
        },
      ],
    },
    {
      name: 'stockStatus',
      type: 'select',
      defaultValue: 'in-stock',
      label: 'Stock status',
      options: [
        {
          label: 'In stock',
          value: 'in-stock',
        },
        {
          label: 'Low stock',
          value: 'low-stock',
        },
        {
          label: 'Out of stock',
          value: 'out-of-stock',
        },
      ],
      admin: {
        description: 'Controls the stock badge on the product page.',
        position: 'sidebar',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Short description',
      admin: {
        description: 'Compact intro shown next to the product title.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: 'Category',
    },
    {
      name: 'subcategories',
      type: 'relationship',
      relationTo: 'subcategories',
      hasMany: true,
      label: 'Subcategories',
      filterOptions: ({ data }) => {
        if (data?.category) {
          return {
            category: {
              equals: data.category,
            },
          }
        }

        return true
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'mainImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Main image (upload)',
          validate: requireMainImage,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Main image URL',
          validate: requireImageSource,
          admin: {
            description: 'Use this for CDN, external or frontend asset images.',
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Gallery',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Upload image',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL',
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Highlights block',
      admin: {
        description: 'Short bullets shown on the product page.',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Highlight',
        },
      ],
    },
    {
      name: 'specifications',
      type: 'array',
      label: 'Specifications',
      fields: [
        {
          name: 'key',
          type: 'text',
          required: true,
          label: 'Field',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Value',
        },
      ],
    },
    {
      name: 'variantProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Variant products',
      admin: {
        description: 'Pick products that should appear in the color/variant block on the product page.',
      },
    },
    {
      name: 'filterOptions',
      type: 'relationship',
      relationTo: 'filter-options',
      hasMany: true,
      label: 'Filter options',
      admin: {
        description: 'Pick all filter options that apply to this product.',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Featured product',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isRecommended',
      type: 'checkbox',
      label: 'Recommended product',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
