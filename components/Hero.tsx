import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative h-[80vh] w-full bg-[#f5f3f0] flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder or actual Image if available */}
            {/* In a real scenario, use a high-quality leather texture or model photo */}
            <div className="absolute inset-0 bg-neutral-200">
                {/* <Image src="/path-to-hero.jpg" alt="Italian Leather Handbag" fill className="object-cover opacity-80" /> */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-90" />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white drop-shadow-md">
                <h2 className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium">Italská kvalita & styl</h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                    Elegantní kožené <br />kabelky z Itálie
                </h1>
                <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto opacity-90">
                    Kabelky, které doplní váš den – stylové, lehké a vždy připravené vyrazit s vámi.
                </p>
                <Link
                    href="/kabelky"
                    className="inline-block bg-white text-black px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                    Prohlédnout kolekci
                </Link>
            </div>
        </div>
    );
};

export default Hero;
