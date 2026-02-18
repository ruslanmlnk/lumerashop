'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { NavItem } from '../types/site';
import { NAV_ITEMS } from '../data/site-data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Italská shopper kabelka z pravé kůže Olivia modrá',
      price: 2199,
      image: '/assets/products/bag-olivia.webp', // Placeholder or use a real image if available
      quantity: 1
    }
  ]);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 20 && scrolled) {
      setScrolled(false);
    }
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 bg-white ${scrolled ? 'shadow-sm' : ''}`}
        style={{ willChange: 'transform, box-shadow' }}
      >
        {/* Top Row: Search | Logo | Icons */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1140px] mx-auto px-4 lg:px-0 flex justify-between items-center h-[70px] md:h-[95px] relative">
            {/* Search (Desktop) */}
            <div className="hidden md:flex items-center flex-1 max-w-[240px]">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Hledat"
                  className="w-full bg-gray-50 border border-neutral-200 py-2.5 pl-4 pr-10 text-[14px] focus:outline-none focus:border-neutral-300 rounded-sm"
                />
                <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-900 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Logo (Centered) */}
            <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
              <div className="relative w-[120px] md:w-[140px] h-[60px] md:h-[85px]">
                <Image
                  src="/assets/logo.webp"
                  alt="LUMERA"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Icons (Right) */}
            <div className="flex items-center space-x-3 md:space-x-4 flex-1 justify-end">
              <button className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#1a1a1a] rounded-full hover:opacity-90 transition-opacity">
                <User size={22} className="text-white" strokeWidth={1.5} />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#1a1a1a] rounded-full relative hover:opacity-90 transition-opacity group"
              >
                <div className="relative">
                  <ShoppingBag size={22} className="text-white" strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-3 flex items-center justify-center w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-[10px] md:text-[12px] font-medium text-white bg-[#e3a651] rounded-full">
                    {cartItems.length}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Row (Desktop) */}
        <nav className="hidden md:block max-w-[1140px] mx-auto px-4 lg:px-0 py-[7.5px]">
          <ul className="flex justify-center items-center space-x-[40px] text-[16px] font-sans font-normal text-[#111111] tracking-wide">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx} className="group relative flex items-center space-x-1">
                <Link href={item.href} className="hover:text-amber-800 transition-colors py-0">
                  {item.label}
                </Link>
                {item.dropdown && (
                  <>
                    <ChevronDown size={14} className="text-gray-400 group-hover:rotate-180 transition-transform" />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-2">
                      <div className="py-2">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link key={sIdx} href={sub.href} className="block px-6 py-2 text-[14px] hover:bg-gray-50 hover:text-amber-800 transition-colors">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/40 z-[60]"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="md:hidden fixed top-0 left-0 w-[85%] h-full bg-white z-[70] p-6 shadow-2xl overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-10">
                  <div className="relative w-[100px] h-[50px]">
                    <Image
                      src="/assets/logo.webp"
                      alt="LUMERA"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    className="p-2 text-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-4 text-base font-medium text-gray-900">
                  {NAV_ITEMS.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-50 pb-4">
                      <div className="flex justify-between items-center">
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="text-lg">
                          {item.label}
                        </Link>
                        {item.dropdown && <ChevronDown size={18} />}
                      </div>
                      {item.dropdown && (
                        <div className="pl-4 mt-3 space-y-3">
                          {item.dropdown.map((sub, sIdx) => (
                            <Link key={sIdx} href={sub.href} onClick={() => setIsOpen(false)} className="block text-sm text-gray-500">
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Mini Cart Drawer */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 bg-black/40 z-[90]"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-white z-[100] shadow-2xl flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 h-[70px] border-b border-gray-100 shrink-0">
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 hover:opacity-70 transition-opacity"
                  >
                    <div className="flex items-center gap-2">
                      <ArrowRight size={20} className="text-gray-800" />
                    </div>
                  </button>
                  <h2 className="text-[16px] font-semibold text-gray-900 absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
                    {cartItems.length > 0 ? 'Zkontrolujte svůj košík' : 'Váš košík je prázdný'}
                  </h2>
                  <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-medium text-gray-500">
                    {cartItems.length}
                  </div>
                </div>

                {/* Content */}
                {cartItems.length > 0 ? (
                  <div className="flex-1 overflow-y-auto p-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 mb-6 pb-6 border-b border-gray-50 last:border-0 last:pb-0 last:mb-0 relative group">
                        {/* Remove Button */}
                        <button
                          onClick={() => setCartItems(items => items.filter(i => i.id !== item.id))}
                          className="absolute top-0 right-0 p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X size={16} />
                        </button>

                        {/* Image */}
                        <div className="relative w-[60px] h-[60px] shrink-0 bg-gray-50 rounded-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 pr-8">
                          <Link href="#" className="text-[14px] font-bold text-gray-900 leading-snug hover:underline block mb-1">
                            {item.name}
                          </Link>
                          <div className="text-[14px] font-semibold text-gray-900 mb-3">
                            {item.price.toLocaleString('cs-CZ')} Kč
                          </div>

                          {/* Quantity */}
                          <div className="flex items-center border border-gray-200 rounded-sm w-fit max-w-[100px]">
                            <button className="px-3 py-1 text-gray-500 hover:text-gray-900 text-lg leading-none">-</button>
                            <input
                              type="text"
                              value={item.quantity}
                              readOnly
                              className="w-8 text-center text-[13px] text-gray-900 font-medium focus:outline-none"
                            />
                            <button className="px-3 py-1 text-gray-500 hover:text-gray-900 text-lg leading-none">+</button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Promo Code Accordion */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between cursor-pointer group">
                        <span className="text-[14px] text-gray-600 group-hover:text-gray-900 transition-colors">Máte slevový kód?</span>
                        <ChevronDown size={14} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Empty State Content */
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <p className="text-gray-600 text-[15px] leading-relaxed max-w-[280px]">
                      Podívejte se do našeho obchodu a zjistěte, co je k dispozici.
                    </p>
                  </div>
                )}

                {/* Footer */}
                <div className="border-t border-gray-100 p-6 bg-gray-50/50 shrink-0">
                  {cartItems.length > 0 ? (
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center text-[14px] text-gray-600">
                        <span>Cena za zboží</span>
                        <span>2 199,00 Kč</span>
                      </div>
                      <div className="flex justify-between items-center text-[14px] text-gray-600">
                        <span>Včetně DPH</span>
                        <span>381,64 Kč</span>
                      </div>
                      <div className="flex justify-between items-center text-[14px] text-gray-600">
                        <span>Doprava</span>
                        <span className="font-semibold text-gray-900">Zdarma!</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                        <span className="text-[16px] font-bold text-gray-900">Celkem</span>
                        <span className="text-[16px] font-bold text-gray-900">2 199,00 Kč</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[15px] font-semibold text-gray-900">Celkem</span>
                      <span className="text-[15px] font-semibold text-gray-900">0,00 Kč</span>
                    </div>
                  )}

                  {cartItems.length > 0 ? (
                    <button
                      className="w-full h-[48px] bg-[#c78d02] hover:bg-[#b07c02] text-white text-[15px] font-semibold rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      Pokračovat k pokladně <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="w-full h-[48px] bg-[#c78d02] hover:bg-[#b07c02] text-white text-[13px] font-bold uppercase tracking-wide rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      Zpět do obchodu <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
