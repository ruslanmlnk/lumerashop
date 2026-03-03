import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'price', 'category', 'status', 'updatedAt'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Назва товару',
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            label: 'Slug (URL)',
        },
        {
            name: 'price',
            type: 'number',
            required: true,
            label: 'Ціна (CZK)',
        },
        {
            name: 'oldPrice',
            type: 'number',
            label: 'Стара ціна (якщо є знижка)',
        },
        {
            name: 'sku',
            type: 'text',
            label: 'SKU (Артикул)',
        },
        {
            name: 'description',
            type: 'richText',
            label: 'Опис товару',
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'categories',
            required: true,
            label: 'Категорія',
        },
        {
            name: 'subcategories',
            type: 'relationship',
            relationTo: 'subcategories',
            hasMany: true,
            label: 'Підкатегорії',
            filterOptions: ({ data }) => {
                if (data?.category) {
                    return {
                        category: {
                            equals: data.category,
                        },
                    }
                }
                return true
            }
        },
        {
            name: 'mainImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Головне зображення',
        },
        {
            name: 'gallery',
            type: 'array',
            label: 'Галерея зображень',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'draft',
            options: [
                {
                    label: 'Чернетка',
                    value: 'draft',
                },
                {
                    label: 'Опубліковано',
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
            label: 'Рекомендований товар',
            defaultValue: false,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'stockQuantity',
            type: 'number',
            label: 'Кількість на складі',
            defaultValue: 0,
            admin: {
                position: 'sidebar',
            }
        }
    ],
}
