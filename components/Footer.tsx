import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#f2f2f2] border-t border-[#e3e5e8] pt-8 md:pt-10 pb-8 md:pb-10">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-16 text-[#111111]">
                    {/* Brand Column */}
                    <div className="flex flex-col space-y-3 md:space-y-6">
                        <div className="relative w-[92px] h-[62px] md:w-[145px] md:h-[97px]">
                            <Image
                                src="/assets/logo.webp"
                                alt="LUMERA"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="hidden md:block text-gray-500 text-[15px] leading-relaxed font-light">
                            LumeraShop.cz – obchod s italskými koženými kabelkami, peněženkami a doplňky. Pravá kůže, nadčasový styl a výběr modelů pro ženy, které hledají kvalitu.
                        </p>
                        <div className="flex space-x-4 md:space-x-6">
                            <Link href="#" className="text-[#111111] hover:text-amber-800 transition-colors">
                                <Facebook size={16} strokeWidth={1.5} />
                            </Link>
                            <Link href="#" className="text-[#111111] hover:text-amber-800 transition-colors">
                                <Instagram size={16} strokeWidth={1.5} />
                            </Link>
                        </div>
                    </div>

                    {/* Shop Categories */}
                    <div>
                        <h3 className="text-[17px] md:text-[20px] font-serif font-bold mb-4 md:mb-6">Nákup</h3>
                        <ul className="space-y-2.5 md:space-y-4 text-[13px] md:text-[16px] text-[#111111] font-normal">
                            <li><Link href="/doprava-a-platba" className="hover:text-amber-800 transition-colors">Doprava a platba</Link></li>
                            <li><Link href="/reklamace-a-vraceni" className="hover:text-amber-800 transition-colors">Reklamace a vrácení</Link></li>
                            <li><Link href="/obchodni-podminky" className="hover:text-amber-800 transition-colors">Obchodní podmínky</Link></li>
                            <li><Link href="/ochrana-osobnich-udaju" className="hover:text-amber-800 transition-colors">Ochrana osobních údajů</Link></li>
                            <li><Link href="/cookies" className="hover:text-amber-800 transition-colors">Cookies</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-[17px] md:text-[20px] font-serif font-bold mb-4 md:mb-6">Platby & Doprava</h3>
                        <div className="flex flex-wrap gap-2.5 md:gap-4 opacity-70 grayscale">
                            {/* Payment/Shipping Icons would go here */}
                            <div className="bg-gray-100 shadow-[0_0_4px_0_rgba(128,128,128,0.3)] px-2.5 md:px-4 py-1.5 md:py-2 rounded-sm text-[10px] md:text-[12px] font-bold">VISA</div>
                            <div className="bg-gray-100 shadow-[0_0_4px_0_rgba(128,128,128,0.3)] px-2.5 md:px-4 py-1.5 md:py-2 rounded-sm text-[10px] md:text-[12px] font-bold">MasterCard</div>
                            <div className="bg-gray-100 shadow-[0_0_4px_0_rgba(128,128,128,0.3)] px-2.5 md:px-4 py-1.5 md:py-2 rounded-sm text-[10px] md:text-[12px] font-bold">DPD</div>
                            <div className="bg-gray-100 shadow-[0_0_4px_0_rgba(128,128,128,0.3)] px-2.5 md:px-4 py-1.5 md:py-2 rounded-sm text-[10px] md:text-[12px] font-bold">Packeta</div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[17px] md:text-[20px] font-serif font-bold mb-4 md:mb-6">Kontakt</h3>
                        <ul className="space-y-2.5 md:space-y-4 text-[13px] md:text-[16px] text-[#111111] font-normal">
                            <li className="flex items-center space-x-2.5 md:space-x-4">
                                <Mail size={15} className="text-gray-400" />
                                <a href="mailto:info@lumerashop.cz" className="hover:text-amber-800 transition-colors">info@lumerashop.cz</a>
                            </li>
                            <li className="flex items-center space-x-2.5 md:space-x-4">
                                <Phone size={15} className="text-gray-400" />
                                <a href="tel:+420775123456" className="hover:text-amber-800 transition-colors">+420 775 123 456</a>
                            </li>
                            <li className="hidden md:block text-gray-500 text-[14px] leading-relaxed italic mt-4">
                                Adresa: Praha, Česká republika
                            </li>
                        </ul>
                        <div className="hidden md:block mt-10">
                            <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] mb-4">Sledujte nás</h4>
                            <p className="text-[13px] text-gray-400 leading-relaxed italic">
                                Přidejte se k nám a objevujte svět italské módy každý den.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#e3e5e8] pt-6 md:pt-10 flex flex-col md:flex-row justify-between items-center text-[12px] md:text-[13px] text-gray-400 font-light">
                    <p>&copy; {new Date().getFullYear()} LumeraShop.cz. Všechna práva vyhrazena.</p>
                    <div className="flex space-x-6 md:space-x-8 mt-4 md:mt-0">
                        <Link href="/ochrana-osobnich-udaju" className="hover:text-black transition-colors">Ochrana soukromí</Link>
                        <Link href="/cookies" className="hover:text-black transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

