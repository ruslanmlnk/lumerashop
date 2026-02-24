'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '../data/site-data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Italská shopper kabelka z pravé kůže Olivia modrá',
      price: 2199,
      image: '/assets/products/bag-olivia.webp',
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
        style={{ fontVariantNumeric: 'lining-nums' }}
      >
        {/* Top Row: Search (Desk) / Menu (Mob) | Logo | Icons */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1140px] mx-auto px-4 lg:px-0 flex justify-between items-center md:items-start h-[70px] md:h-[81px] relative">

            {/* Left: Search (Desktop only) or Menu Button (Mobile only) */}
            <div className="flex-1 flex items-center md:items-start">
              {/* Desktop Search */}
              <div className="hidden md:flex items-center pt-0 md:pt-[34px]">
                <div className="relative flex items-center w-[200px] h-[38px] bg-white border-[0.8px] border-[#B3B3B3]">
                  <input
                    type="text"
                    placeholder="Hledat"
                    className="w-full h-full pl-[13px] pr-[35px] text-[16px] placeholder:text-[#808080] focus:outline-none bg-transparent font-sans text-[#111111]"
                  />
                  <Search size={16} className="absolute right-[10px] text-[#111111] pointer-events-none" />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-1 text-gray-900 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu size={32} strokeWidth={1.5} />
              </button>
            </div>

            {/* Logo (Centered) */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-[24px]">
              <div className="relative w-[80px] h-[53px]">
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
            <div className="flex items-center md:items-start pt-0 md:pt-[26px] space-x-2 md:space-x-[38px] flex-1 justify-end md:pr-[12px]">
              <Link href="/my-account" className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#1a1a1a] rounded-full hover:opacity-90 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="white">
                  <path d="M16 4C13.7909 4 12 5.79086 12 8C12 10.2091 13.7909 12 16 12C18.2091 12 20 10.2091 20 8C20 5.79086 18.2091 4 16 4ZM8 8C8 3.58172 11.5817 0 16 0C20.4183 0 24 3.58172 24 8C24 12.4183 20.4183 16 16 16C11.5817 16 8 12.4183 8 8ZM16 18C10.4772 18 6 22.4772 6 28C6 28.5523 5.55228 29 5 29C4.44772 29 4 28.5523 4 28C4 21.3726 9.37258 16 16 16C22.6274 16 28 21.3726 28 28C28 28.5523 27.5523 29 27 29C26.4477 29 26 28.5523 26 28C26 22.4772 21.5228 18 16 18Z" />
                </svg>
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#1a1a1a] rounded-full relative hover:opacity-90 transition-opacity group"
              >
                <svg width="24" height="24" viewBox="0 0 32 32" fill="white">
                  <path d="M6.55 13.0581L9.225 21.4481C9.425 22.0456 9.95 22.444 10.575 22.444H20.9C21.5 22.444 22.075 22.0705 22.275 21.5228L26.225 10.9917H28.5C29.05 10.9917 29.5 10.5436 29.5 9.99585C29.5 9.44813 29.05 9 28.5 9H25.525C25.1 9 24.725 9.27386 24.575 9.6722L20.5 20.4523H11L8.875 13.7303H20.65C21.2 13.7303 21.65 13.2822 21.65 12.7344C21.65 12.1867 21.2 11.7386 20.65 11.7386H7.5C7.175 11.7386 6.875 11.9129 6.7 12.1618C6.5 12.4108 6.45 12.7593 6.55 13.0581ZM20.4 23.7635C20.825 23.7635 21.25 23.9378 21.55 24.2365C21.85 24.5353 22.025 24.9585 22.025 25.3817C22.025 25.805 21.85 26.2282 21.55 26.527C21.25 26.8257 20.825 27 20.4 27C19.975 27 19.55 26.8257 19.25 26.527C18.95 26.2282 18.775 25.805 18.775 25.3817C18.775 24.9585 18.95 24.5353 19.25 24.2365C19.55 23.9378 19.975 23.7635 20.4 23.7635ZM11.425 23.7635C11.85 23.7635 12.275 23.9378 12.575 24.2365C12.875 24.5353 13.05 24.9585 13.05 25.3817C13.05 25.805 12.875 26.2282 12.575 26.527C12.275 26.8257 11.85 27 11.425 27C11 27 10.575 26.8257 10.275 26.527C9.975 26.2282 9.8 25.805 9.8 25.3817C9.8 24.9585 9.975 24.5353 10.275 24.2365C10.575 23.9378 11 23.7635 11.425 23.7635Z" />
                </svg>
                <span className="absolute -top-[2px] right-[29px] flex items-center justify-center w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-[10px] md:text-[11px] font-bold text-white bg-[#E3A651] rounded-full border-[1.5px] border-[#1a1a1a]">
                  {cartItems.length}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Row (Mobile only) */}
        <div className="md:hidden border-b border-gray-100 py-[20px] px-4 flex justify-center h-[74px]">
          <div className="relative w-full max-w-[280px]">
            <input
              type="text"
              placeholder="Hledat"
              className="w-full bg-white border-[0.8px] border-[#808080] h-[36px] pl-3 pr-8 text-[14px] placeholder:text-[#808080] focus:outline-none rounded-none font-sans text-center"
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
          </div>
        </div>

        {/* Navigation Row (Desktop only) */}
        <nav className="hidden md:block max-w-[1140px] mx-auto px-4 lg:px-0 h-[54px]">
          <ul className="flex justify-center items-center h-full font-sans font-normal text-[#111111]">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx} className="group relative h-full flex items-center">
                <Link
                  href={item.href}
                  className="px-[20px] text-[16px] leading-[1] hover:text-[#C8A16A] transition-colors whitespace-nowrap flex items-center h-full"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className="ml-1.5 opacity-60 group-hover:rotate-180 transition-transform"
                    />
                  )}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-[200px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.dropdown?.map((sub, sIdx) => (
                        <Link key={sIdx} href={sub.href} className="block px-5 py-2.5 text-[16px] hover:text-[#C8A16A] transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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
                className="md:hidden fixed top-0 left-0 w-[85%] h-full bg-black z-[70] p-6 shadow-2xl overflow-y-auto text-white"
              >
                <div className="flex justify-between items-center mb-10">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-[20px] font-sans tracking-[0.2em] flex items-center">
                    <span className="font-semibold text-white">LUMERA</span>
                    <span className="ml-[6px] text-[#c8a16a]">SHOP</span>
                  </Link>
                  <button
                    className="p-2 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={28} strokeWidth={1.5} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-0 text-white">
                  {NAV_ITEMS.map((item, idx) => (
                    <div key={idx} className="border-b border-white/10">
                      <div className="flex justify-between items-center py-4">
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="text-[16px] font-normal uppercase tracking-wider">
                          {item.label}
                        </Link>
                        {item.dropdown && <ChevronDown size={18} className="opacity-60" />}
                      </div>
                      {item.dropdown && (
                        <div className="pl-4 pb-4 space-y-3">
                          {item.dropdown.map((sub, sIdx) => (
                            <Link key={sIdx} href={sub.href} onClick={() => setIsOpen(false)} className="block text-sm text-white/70 hover:text-white transition-colors">
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
                    {cartItems.length > 0 ? 'Zkontrolujte svůj košíк' : 'Váš košík je prázdný'}
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
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <p className="text-gray-600 text-[15px] leading-relaxed max-w-[280px]">
                      Podívejte se do našeho obchodu a zjistěте, co je k dispozici.
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
