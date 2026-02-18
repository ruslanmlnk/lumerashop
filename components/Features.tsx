'use client';
import { Truck, ShieldCheck, Palette, Lock, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
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

const FeatureItem = ({ feature, index }: { feature: Feature, index: number }) => {
    const Icon = icons[feature.icon as keyof typeof icons] || Truck;
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-12 bg-white flex flex-col items-center border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="w-16 h-16 flex items-center justify-center text-gray-900 mb-6">
                <Icon size={40} strokeWidth={1} />
            </div>
            <h3 className="text-[18px] font-sans font-bold mb-3 text-[#111111]">{feature.title}</h3>
            <p className="text-gray-500 text-[14px] leading-relaxed font-light">{feature.description}</p>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-0 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {FEATURES_DATA.map((feature, idx) => (
                        <FeatureItem
                            key={feature.id}
                            feature={feature}
                            index={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
