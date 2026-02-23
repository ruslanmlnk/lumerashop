import { NavItem, Category, Product, Feature, Testimonial, BlogPost } from '../types/site';

export const NAV_ITEMS: NavItem[] = [
    { label: 'Domů', href: '/' },
    { label: 'Dámské kabelky', href: '/product-category/kabelky' },
    { label: 'Pánské tašky', href: '/product-category/panske-tasky' },
    {
        label: 'Batohy',
        href: '/product-category/batohy',
        dropdown: [
            { label: 'Kožené batohy', href: '/product-category/batohy?type=kozene' },
            { label: 'Městské batohy', href: '/product-category/batohy?type=mestske' }
        ]
    },
    {
        label: 'Doplňky',
        href: '/product-category/doplnky',
        dropdown: [
            { label: 'Peněženky', href: '/product-category/doplnky?type=penezenky' },
            { label: 'Pásky', href: '/product-category/doplnky?type=pasky' }
        ]
    },
    { label: 'O nás', href: '/o-nas' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/kontakt' }
];

export const HERO_CATEGORIES: Category[] = [
    { name: 'Dámské Kabelky', bg: '/assets/bg/damske-kabelky.webp', product: '/assets/icons/cat-kabelky.webp', href: '/product-category/kabelky' },
    { name: 'Pánské tašky', bg: '/assets/bg/panske-tasky.webp', product: '/assets/icons/cat-tasky.webp', href: '/product-category/panske-tasky' },
    { name: 'Batohy', bg: '/assets/bg/batohynew.webp', product: '/assets/icons/cat-batohy.webp', href: '/product-category/batohy' },
    { name: 'Doplňky', bg: '/assets/bg/doplnky.webp', product: '/assets/icons/cat-doplnky.webp', href: '/product-category/doplnky' }
];

export const FEATURED_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Italská shopper kabelka z pravé kuže Olivia růžová',
        price: '2 199 Kč',
        image: 'https://lumerashop.cz/wp-content/uploads/2026/02/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-72.webp',
        slug: 'olivia-ruzova',
        category: 'Kabelky',
        sku: '00044rz',
        description: 'Italská kabelka z pravé kůže Olivia v růžové barvě spojuje moderní eleganci a vysoce praktický design. Tato praktická, damská kabelka je vybavena dvojitými uchy, která umožňují pohodlné nošení v ruce i přes rameno. Díky vnitřnímu zapínání můžete snadno měnit její tvar podle aktuálního obsahu či nálady. Hlavní prostor se bezpečně uzavírá na zip a obsahuje jednu velkou kapsu na zip a tři menší kapsičky. Do kabelky se pohodlně vejdou i dokumenty formátu A4.',
        gallery: [
            'https://lumerashop.cz/wp-content/uploads/2026/02/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-72.webp',
            'https://lumerashop.cz/wp-content/uploads/2026/02/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-73.webp',
            'https://lumerashop.cz/wp-content/uploads/2026/02/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-75.webp',
            'https://lumerashop.cz/wp-content/uploads/2026/02/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-76.webp'
        ],
        specifications: {
            'Rozměry': 'Š 45 cm x V 30 cm x H 14 cm',
            'Materiál': 'Kůže',
            'Barva': 'Růžová',
            'Délka uší': '2x 35 cm, 2x 70 cm',
            'Kování': 'Stříbrná barva',
            'Vyrobeno v': 'Itálii',
            'A4': 'Ano'
        }
    },
    { id: '2', name: 'Pásek tmavo hnědý', price: '890 Kč', image: '/assets/products/pasek-tmavo-hnedy.webp', slug: 'pasek-tmavo-hnedy', category: 'Doplňky' },
    { id: '3', name: 'Pásek hnědý', price: '890 Kč', image: '/assets/products/pasek-hnedy.webp', slug: 'pasek-hnedy', category: 'Doplňky' },
    { id: '4', name: 'Pásek černý', price: '890 Kč', image: '/assets/products/pasek-cerny.webp', slug: 'pasek-cerny', category: 'Doplňky' }
];

export const RECOMMENDED_PRODUCTS: Product[] = [
    { id: '5', name: 'Pásek taupe', price: '890 Kč', image: '/assets/products/pasek-taupe.webp', slug: 'pasek-taupe', category: 'Doplňky' },
    { id: '6', name: 'Elis béžova', price: '2 490 Kč', image: '/assets/products/elis-bezova.webp', slug: 'elis-bezova', category: 'Kabelky' },
    { id: '7', name: 'Elis taupe', price: '2 490 Kč', image: '/assets/products/elis-taupe.webp', slug: 'elis-taupe', category: 'Kabelky' },
    { id: '8', name: 'Viko černá', price: '2 190 Kč', image: '/assets/products/viko-cerna.webp', slug: 'viko-cerna', category: 'Kabelky' },
    { id: '9', name: 'Pásek hnědý II', price: '890 Kč', image: '/assets/products/pasek-hnedy.webp', slug: 'pasek-hnedy-2', category: 'Doplňky' },
    { id: '10', name: 'Elis béžova II', price: '2 490 Kč', image: '/assets/products/elis-bezova.webp', slug: 'elis-bezova-2', category: 'Kabelky' },
    { id: '11', name: 'Olivia růžová II', price: '2 890 Kč', image: '/assets/products/olivia-ruzova.webp', slug: 'olivia-ruzova-2', category: 'Kabelky' },
    { id: '12', name: 'Viko černá II', price: '2 190 Kč', image: '/assets/products/viko-cerna.webp', slug: 'viko-cerna-2', category: 'Kabelky' }
];

export const ALL_PRODUCTS: Product[] = [
    ...FEATURED_PRODUCTS,
    ...RECOMMENDED_PRODUCTS,
    { id: '13', name: 'Batoh City', price: '3 290 Kč', image: '/assets/products/elis-bezova.webp', slug: 'batoh-city', category: 'Batohy' },
    { id: '14', name: 'Pánská taška Blue', price: '4 190 Kč', image: '/assets/products/viko-cerna.webp', slug: 'panska-taska-blue', category: 'Pánské tašky' }
];

export const FEATURES_DATA: Feature[] = [
    { id: '1', title: 'Italský původ', description: 'Kabelky přímo od výrobců z Itálie.', icon: 'Award' },
    { id: '2', title: 'Pečlivý výběr', description: 'Každý model vybíráme osobně.', icon: 'ShieldCheck' },
    { id: '3', title: 'Doprava zdarma', description: 'U objednávek nad 2 500 Kč.', icon: 'Truck' },
    { id: '4', title: 'Osobní přístup', description: 'Rádi vám poradíme s výběrem.', icon: 'Heart' }
];

export const TESTIMONIALS: Testimonial[] = [
    { text: "Stylové, originální a precizně zpracované produkty. Doporučuji!", author: "Marie N.", location: "Praha" },
    { text: "Kabelka přišla nádherně zabalená, kvalita mě mile překvapila.", author: "Jana S.", location: "Brno" },
    { text: "Rychlé doručení a perfektní komunikace. Kabelka je nádherná.", author: "Lucie B.", location: "Ostrava" }
];

export const BLOG_POSTS: BlogPost[] = [
    { title: "Jak vybrat tu pravou kabelku?", excerpt: "Průvodce světem stylů, materiálů a velikostí.", image: "/assets/blog/vybrat-kabelku.jpg", slug: "jak-vybrat-kabelku" },
    { title: "Péče o kožené výrobky", excerpt: "Jak udržet vaše doplňky dlouho jako nové.", image: "/assets/blog/pece-o-kuzi.jpg", slug: "pece-o-kozi" },
    { title: "Barvy, které ovládnou sezónu", excerpt: "Inspirujte se nejnovějšími trendy z Itálie.", image: "/assets/blog/barvy.jpg", slug: "trendy-barvy" }
];
