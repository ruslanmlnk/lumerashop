import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'slug', 'updatedAt'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Назва категорії',
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            label: 'Slug (URL)',
            admin: {
                description: 'Коротке ім\'я для URL-адреси (наприклад, "damske-kabelky")',
            },
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
            label: 'Зображення категорії',
        },
    ],
}
