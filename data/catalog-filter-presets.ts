export type CatalogFilterPreset = {
  name: string
  slug: string
  sortOrder: number
  options: Array<{
    name: string
    sortOrder: number
  }>
}

export const CATALOG_FILTER_PRESETS: CatalogFilterPreset[] = [
  {
    name: 'Material',
    slug: 'material',
    sortOrder: 10,
    options: [
      { name: 'k\u016f\u017ee', sortOrder: 10 },
      { name: 'semi\u0161ov\u00e1 k\u016f\u017ee', sortOrder: 20 },
    ],
  },
  {
    name: 'Barva',
    slug: 'barva',
    sortOrder: 20,
    options: [
      { name: 'tmav\u011b hn\u011bd\u00e1', sortOrder: 10 },
      { name: '\u010dern\u00e1', sortOrder: 20 },
      { name: 'taupe', sortOrder: 30 },
      { name: 'hn\u011bd\u00e1', sortOrder: 40 },
      { name: 'ko\u0148ak', sortOrder: 50 },
      { name: 'v\u00ednov\u00e1', sortOrder: 60 },
      { name: 'b\u00e9\u017eov\u00e1', sortOrder: 70 },
      { name: '\u0161ed\u00e1', sortOrder: 80 },
      { name: '\u010derven\u00e1', sortOrder: 90 },
      { name: 'zelen\u00e1', sortOrder: 100 },
      { name: 'modr\u00e1', sortOrder: 110 },
    ],
  },
  {
    name: 'Kov\u00e1n\u00ed',
    slug: 'kovani',
    sortOrder: 30,
    options: [
      { name: 'zlat\u00e1 barva', sortOrder: 10 },
      { name: 'st\u0159\u00edbrn\u00e1 barva', sortOrder: 20 },
      { name: 'zlat\u00e1 kart\u00e1\u010dov\u00e1 barva', sortOrder: 30 },
      { name: 'bez kovu', sortOrder: 40 },
    ],
  },
  {
    name: 'Pod\u0161\u00edvka',
    slug: 'podsivka',
    sortOrder: 40,
    options: [
      { name: 'ano', sortOrder: 10 },
      { name: 'ne', sortOrder: 20 },
    ],
  },
  {
    name: 'Druhy d\u00e1msk\u00fdch kabelek',
    slug: 'druhy-damskych-kabelek',
    sortOrder: 50,
    options: [
      { name: 'Kabelky do ruky', sortOrder: 10 },
      { name: 'Trendov\u00e9 kabelky', sortOrder: 20 },
      { name: 'Luxusn\u00ed kabelky', sortOrder: 30 },
      { name: 'Kabelky p\u0159es rameno', sortOrder: 40 },
      { name: 'Velk\u00e9 kabelky', sortOrder: 50 },
      { name: 'St\u0159edn\u00ed kabelky', sortOrder: 60 },
      { name: 'Mal\u00e9 kabelky', sortOrder: 70 },
      { name: 'Shopper kabelky', sortOrder: 80 },
      { name: 'Batu\u017eky', sortOrder: 90 },
      { name: 'Crossbody kabelky', sortOrder: 100 },
      { name: 'Cestovn\u00ed ta\u0161ky', sortOrder: 110 },
      { name: 'S \u0159et\u00edzkov\u00fdm popruhem', sortOrder: 120 },
      { name: 'Kabelky s t\u0159\u00e1sn\u011bmi', sortOrder: 130 },
      { name: 'Kabelky s kožešinou', sortOrder: 140 },
    ],
  },
  {
    name: 'Druhy p\u00e1nsk\u00fdch ta\u0161ek',
    slug: 'druhy-panskych-tasek',
    sortOrder: 60,
    options: [
      { name: 'Cestovn\u00ed ta\u0161ky', sortOrder: 10 },
      { name: 'Batohy', sortOrder: 20 },
      { name: 'Crossbody ta\u0161ky', sortOrder: 30 },
      { name: 'Pracovn\u00ed ta\u0161ky', sortOrder: 40 },
      { name: 'Ta\u0161ky na notebook', sortOrder: 50 },
    ],
  },
  {
    name: 'Stav',
    slug: 'stav',
    sortOrder: 70,
    options: [
      { name: 'Skladem', sortOrder: 10 },
      { name: 'Nen\u00ed skladem', sortOrder: 20 },
      { name: 'Na objedn\u00e1vku', sortOrder: 30 },
    ],
  },
  {
    name: 'Ur\u010den\u00ed',
    slug: 'urceni',
    sortOrder: 80,
    options: [
      { name: 'D\u00e1msk\u00e9', sortOrder: 10 },
      { name: 'P\u00e1nsk\u00e9', sortOrder: 20 },
      { name: 'Unisex', sortOrder: 30 },
    ],
  },
]
