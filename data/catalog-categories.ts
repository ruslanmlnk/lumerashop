export type CatalogCategoryPreset = {
  name: string
  slug: string
  showInMenu?: boolean
  subcategories?: Array<{
    name: string
    slug: string
    showInMenu?: boolean
  }>
}

export const CATALOG_CATEGORY_PRESETS: CatalogCategoryPreset[] = [
  {
    name: 'D\u00e1msk\u00e9 kabelky',
    slug: 'kabelky',
    showInMenu: true,
  },
  {
    name: 'P\u00e1nsk\u00e9 ta\u0161ky',
    slug: 'panske-tasky',
    showInMenu: true,
  },
  {
    name: 'Batohy',
    slug: 'batohy',
    showInMenu: true,
    subcategories: [
      {
        name: 'P\u00e1nsk\u00e9 Batohy',
        slug: 'panske-batohy',
        showInMenu: true,
      },
      {
        name: '\u017densk\u00e9 batohy',
        slug: 'zenske-batohy',
        showInMenu: true,
      },
    ],
  },
  {
    name: 'Dopl\u0148ky',
    slug: 'doplnky',
    showInMenu: true,
    subcategories: [
      {
        name: 'Opasky',
        slug: 'opasky',
        showInMenu: true,
      },
      {
        name: 'Pen\u011b\u017eenky',
        slug: 'penezenky',
        showInMenu: true,
      },
    ],
  },
  {
    name: 'D\u00e1rkov\u00e9 poukazy',
    slug: 'darkove-poukazy',
    subcategories: [
      {
        name: 'D\u00e1rkov\u00fd poukaz elektronick\u00fd',
        slug: 'darkovy-poukaz-elektronicky',
      },
      {
        name: 'D\u00e1rkov\u00fd poukaz ti\u0161t\u011bn\u00fd',
        slug: 'darkovy-poukaz-tisteny',
      },
    ],
  },
  {
    name: 'DAVID JONES',
    slug: 'david-jones',
  },
  {
    name: 'ENRICO COVERI',
    slug: 'enrico-coveri',
  },
  {
    name: 'Akce',
    slug: 'akce',
  },
]
