'use client';
import { Truck, ShieldCheck, Palette, Lock, Award, Heart } from 'lucide-react';
import { Feature } from '../types/site';
import { FEATURES_DATA } from '../data/site-data';

const icons = {
    Truck,
    ShieldCheck,
    Palette,
    Lock,
    Award,
    Heart,
};

const FeatureItem = ({ feature }: { feature: Feature }) => {
    const Icon = icons[feature.icon as keyof typeof icons] || Truck;
    return (
        <div
            className="text-center px-6 py-9 md:px-8 md:py-10 bg-[#f6f6f7] flex flex-col items-center border border-[#e7e9ed] transition-shadow hover:shadow-sm"
        >
            <div className="w-16 h-16 flex items-center justify-center text-[#6f7783] mb-5">
                <Icon size={40} strokeWidth={1} />
            </div>
            <h3 className="text-[18px] font-sans font-bold mb-2.5 text-[#666666]">{feature.title}</h3>
            <p className="text-[#b3b8c0] text-[14px] leading-relaxed font-light">{feature.description}</p>
        </div>
    );
};

const Features = () => {
    return (
        <section className="py-8 md:py-[40px] bg-[#f2f2f2] relative overflow-hidden">
            <div className="lumera-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-2.5">
                    {FEATURES_DATA.map((feature) => (
                        <FeatureItem
                            key={feature.id}
                            feature={feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
