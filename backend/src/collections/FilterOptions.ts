import type { CollectionConfig } from 'payload'

export const FilterOptions: CollectionConfig = {
  slug: 'filter-options',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'group', 'slug', 'sortOrder', 'isActive', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Option name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'Slug',
    },
    {
      name: 'group',
      type: 'relationship',
      relationTo: 'filter-groups',
      required: true,
      label: 'Filter group',
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      label: 'Sort order',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
    },
  ],
}
