import type { GlobalConfig } from 'payload'
import { seo } from '../fields/seo'

export const HomePage: GlobalConfig = {
    slug: 'home-page',
    label: 'Home Page',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Main Title',
            required: true,
        },
        seo,
    ],
}
