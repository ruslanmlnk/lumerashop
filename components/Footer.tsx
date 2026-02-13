import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-50 pt-16 pb-8 border-t border-neutral-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-gray-900">
                            LUMERA
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Elegantní kožené kabelky, peněženky a doplňky z Itálie. Pravá kůže, nadčasový styl a kvalita.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-black transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-900">Obchod</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/kabelky" className="hover:text-black transition-colors">Kabelky</Link></li>
                            <li><Link href="/batohy" className="hover:text-black transition-colors">Batohy</Link></li>
                            <li><Link href="/pasky" className="hover:text-black transition-colors">Pásky</Link></li>
                            <li><Link href="/novinky" className="hover:text-black transition-colors">Novinky</Link></li>
                            <li><Link href="/sale" className="hover:text-black transition-colors text-red-600">Výprodej</Link></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-900">Informace</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/o-nas" className="hover:text-black transition-colors">O nás</Link></li>
                            <li><Link href="/doprava-a-platba" className="hover:text-black transition-colors">Doprava a platba</Link></li>
                            <li><Link href="/obchodni-podminky" className="hover:text-black transition-colors">Obchodní podmínky</Link></li>
                            <li><Link href="/kontakt" className="hover:text-black transition-colors">Kontakt</Link></li>
                            <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-900">Kontakt</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                                <span>Praha, Česká republika</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="flex-shrink-0" />
                                <a href="tel:+420123456789" className="hover:text-black transition-colors">+420 123 456 789</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="flex-shrink-0" />
                                <a href="mailto:info@lumerashop.cz" className="hover:text-black transition-colors">info@lumerashop.cz</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} LumeraShop.cz. Všechna práva vyhrazena.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <span>Visa</span>
                        <span>Mastercard</span>
                        <span>Apple Pay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
