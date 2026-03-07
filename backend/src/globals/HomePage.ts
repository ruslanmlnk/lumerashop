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
            name: 'aboutSection',
            type: 'group',
            label: 'About section (block with video)',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    required: true,
                    defaultValue: 'O obchodě Lumera',
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Description',
                    required: true,
                    defaultValue:
                        'Lumera je český obchod s italskými koženými kabelkami a doplňky.\nSpolupracujeme s menšími výrobci z Itálie, kteří si zakládají na kvalitě a ručním zpracování. Každý model pečlivě vybíráme tak, aby spojoval eleganci, praktičnost a originalitu. Věříme, že krása je v detailu - stejně jako v každé kabelce, kterou nabízíme.',
                },
                {
                    name: 'buttonText',
                    type: 'text',
                    label: 'Button text',
                    required: true,
                    defaultValue: 'Zjistit více o obchodě',
                },
                {
                    name: 'buttonLink',
                    type: 'text',
                    label: 'Button link',
                    required: true,
                    defaultValue: '/o-nas',
                },
            ],
        },
        {
            name: 'marketingSlides',
            type: 'array',
            label: 'Marketing slider',
            labels: {
                singular: 'Slide',
                plural: 'Slides',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    label: 'Title',
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                    label: 'Description',
                },
                {
                    name: 'button',
                    type: 'text',
                    required: true,
                    label: 'Button label',
                },
                {
                    name: 'link',
                    type: 'text',
                    required: true,
                    label: 'Button link',
                },
                {
                    name: 'bg',
                    type: 'text',
                    required: true,
                    label: 'Background image URL',
                },
                {
                    name: 'overlayImage',
                    type: 'text',
                    required: true,
                    label: 'Overlay image URL',
                },
                {
                    name: 'layout',
                    type: 'group',
                    label: 'Desktop layout',
                    fields: [
                        {
                            name: 'paddingTop',
                            type: 'number',
                            required: true,
                            label: 'Top offset',
                        },
                        {
                            name: 'titleMaxWidth',
                            type: 'number',
                            required: true,
                            label: 'Title max width',
                        },
                        {
                            name: 'descMaxWidth',
                            type: 'number',
                            required: true,
                            label: 'Description max width',
                        },
                        {
                            name: 'img',
                            type: 'group',
                            label: 'Overlay image position',
                            fields: [
                                {
                                    name: 'w',
                                    type: 'number',
                                    required: true,
                                    label: 'Image width',
                                },
                                {
                                    name: 'h',
                                    type: 'number',
                                    required: true,
                                    label: 'Image height',
                                },
                                {
                                    name: 'top',
                                    type: 'number',
                                    required: true,
                                    label: 'Image top',
                                },
                                {
                                    name: 'right',
                                    type: 'number',
                                    required: true,
                                    label: 'Image right',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        seo,
    ],
}
