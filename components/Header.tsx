'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { NavItem } from '../types/site';
import { NAV_ITEMS } from '../data/site-data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="flex items-center space-x-2 md:space-x-4 flex-1 justify-end">
            <button className="p-2 text-gray-800 hover:opacity-70 transition-opacity">
              <User size={24} strokeWidth={1.2} />
            </button>
            <Link href="/cart" className="p-2 text-gray-800 hover:opacity-70 transition-opacity relative">
              <div className="relative flex items-center justify-center">
                <ShoppingBag size={24} strokeWidth={1.2} />
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-[18px] h-[18px] text-[10px] font-bold text-white bg-black rounded-full">0</span>
              </div>
            </Link>
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
    </header>
  );
};

export default Header;
