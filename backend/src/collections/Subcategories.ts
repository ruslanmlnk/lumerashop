import type { CollectionConfig } from 'payload'

export const Subcategories: CollectionConfig = {
    slug: 'subcategories',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'category', 'updatedAt'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Назва підкатегорії',
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            label: 'Slug (URL)',
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'categories',
            required: true,
            label: 'Батьківська категорія',
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Опис',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            label: 'Зображення підкатегорії',
        },
    ],
}
