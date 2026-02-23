import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-[#111111]">
                    {/* Brand Column */}
                    <div className="flex flex-col space-y-8">
                        <div className="relative w-[145px] h-[97px]">
                            <Image
                                src="/assets/logo.webp"
                                alt="LUMERA"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                            LumeraShop.cz – obchod s italskými koženými kabelkami, peněženkami a doplňky. Pravá kůže, nadčasový styl a výběr modelů pro ženy, které hledají kvalitu.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-[#111111] hover:text-amber-800 transition-colors">
                                <Facebook size={20} strokeWidth={1.5} />
                            </Link>
                            <Link href="#" className="text-[#111111] hover:text-amber-800 transition-colors">
                                <Instagram size={20} strokeWidth={1.5} />
                            </Link>
                        </div>
                    </div>

                    {/* Shop Categories */}
                    <div>
                        <h3 className="text-[20px] font-serif font-bold mb-10">Nákup</h3>
                        <ul className="space-y-4 text-[16px] text-[#111111] font-normal">
                            <li><Link href="/doprava-a-platba" className="hover:text-amber-800 transition-colors">Doprava a platba</Link></li>
                            <li><Link href="/reklamace-a-vraceni" className="hover:text-amber-800 transition-colors">Reklamace a vrácení</Link></li>
                            <li><Link href="/obchodni-podminky" className="hover:text-amber-800 transition-colors">Obchodní podmínky</Link></li>
                            <li><Link href="/ochrana-osobnich-udaju" className="hover:text-amber-800 transition-colors">Ochrana osobních údajů</Link></li>
                            <li><Link href="/cookies" className="hover:text-amber-800 transition-colors">Cookies</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-[20px] font-serif font-bold mb-10">Platby & Doprava</h3>
                        <div className="flex flex-wrap gap-4 opacity-70 grayscale">
                            {/* Payment/Shipping Icons would go here */}
                            <div className="bg-gray-100 px-4 py-2 rounded-sm text-[12px] font-bold">VISA</div>
                            <div className="bg-gray-100 px-4 py-2 rounded-sm text-[12px] font-bold">MasterCard</div>
                            <div className="bg-gray-100 px-4 py-2 rounded-sm text-[12px] font-bold">DPD</div>
                            <div className="bg-gray-100 px-4 py-2 rounded-sm text-[12px] font-bold">Packeta</div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[20px] font-serif font-bold mb-10">Kontakt</h3>
                        <ul className="space-y-5 text-[16px] text-[#111111] font-normal">
                            <li className="flex items-center space-x-4">
                                <Mail size={18} className="text-gray-400" />
                                <a href="mailto:info@lumerashop.cz" className="hover:text-amber-800 transition-colors">info@lumerashop.cz</a>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone size={18} className="text-gray-400" />
                                <a href="tel:+420775123456" className="hover:text-amber-800 transition-colors">+420 775 123 456</a>
                            </li>
                            <li className="text-gray-500 text-[14px] leading-relaxed italic mt-4">
                                Adresa: Praha, Česká republika
                            </li>
                        </ul>
                        <div className="mt-12">
                            <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] mb-4">Sledujte nás</h4>
                            <p className="text-[13px] text-gray-400 leading-relaxed italic">
                                Přidejte se k nám a objevujte svět italské módy každý den.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-400 font-light">
                    <p>&copy; {new Date().getFullYear()} LumeraShop.cz. Všechna práva vyhrazena.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Link href="/ochrana-osobnich-udaju" className="hover:text-black transition-colors">Ochrana soukromí</Link>
                        <Link href="/cookies" className="hover:text-black transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
