import { Truck, Award, Leaf, Heart } from 'lucide-react';

const icons = {
    italian: Award,
    quality: Leaf, // Metaphor for natural leather
    shipping: Truck,
    personal: Heart,
};

const FeatureItem = ({ title, description, iconKey }: { title: string, description: string, iconKey: keyof typeof icons }) => {
    const Icon = icons[iconKey];
    return (
        <div className="text-center p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-full text-amber-800 mb-4">
                <Icon size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

const Features = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">O obchodě Lumera</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Malý obchod, velká vášeň pro krásu a design.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureItem
                        title="Italský původ"
                        description="Kabelky přímo od menších výrobců z Itálie."
                        iconKey="italian"
                    />
                    <FeatureItem
                        title="Pečlivý výběr"
                        description="Každý model vybíráme osobně s důrazem na kvalitu a styl."
                        iconKey="quality"
                    />
                    <FeatureItem
                        title="Doprava zdarma"
                        description="Pro objednávky nad 1500 Kč doprava zdarma. Rychlé doručení."
                        iconKey="shipping"
                    />
                    <FeatureItem
                        title="Osobní přístup"
                        description="Jsme tu pro vás s radou i pomocí při výběru."
                        iconKey="personal"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
