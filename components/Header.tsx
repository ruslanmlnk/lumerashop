'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { Menu, X, Search, ChevronDown, ArrowRight, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '../data/site-data';

const MENU_ARROW_DOWN_BG =
  'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iIzgwODA4MCIgZD0iTTIuMSw1LjJMMi4xLDUuMmMwLjMtMC4zLDAuOC0wLjMsMS4xLDBMOCwxMC4zbDQuNy01QzEzLDUsMTMuNSw1LDEzLjksNS4zbDAsMGMwLjMsMC4zLDAuMSwwLjctMC4yLDENCglsLTUsNS40Yy0wLjMsMC4zLTAuOCwwLjMtMS4xLDBMMi40LDYuNEMyLjEsNi4xLDEuOCw1LjUsMi4xLDUuMnoiLz4NCjwvc3ZnPg0K)';

const MOBILE_QUICK_LINKS = [
  { label: 'Pánské tašky', href: '/product-category/panske-tasky', hasArrow: false },
  { label: 'Batohy', href: '/product-category/batohy', hasArrow: true },
  { label: 'Doplňky', href: '/product-category/doplnky', hasArrow: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );
  };

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
          <div className="max-w-[1140px] mx-auto px-4 lg:px-0 flex justify-between items-center md:items-start h-[82px] md:h-[81px] relative">

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
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-[14px] md:top-[24px]">
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

        {/* Mobile Search Bar Row */}
        <div className="md:hidden border-b border-gray-100 py-3 px-4 bg-white">
          <div className="relative flex items-center w-full h-[44px] bg-white border-[0.8px] border-[#B3B3B3]">
            <input
              type="text"
              placeholder="Hledat"
              className="w-full h-full pl-[15px] pr-[40px] text-[16px] placeholder:text-[#808080] focus:outline-none bg-transparent font-sans text-[#111111]"
            />
            <Search size={20} className="absolute right-[12px] text-[#111111] pointer-events-none" />
          </div>
        </div>

        {/* Navigation Row (Desktop only) */}
        <nav className="hidden md:block max-w-[1140px] mx-auto px-4 lg:px-0 h-[53px]">
          <ul className="flex justify-center items-center h-full font-sans text-[#111111] gap-[52px]">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx} className="group relative h-full flex items-center">
                <Link
                  href={item.href}
                  className="py-[10px] text-[15px] font-[400] leading-[1] tracking-[0.04em] normal-case hover:text-[#C8A16A] transition-colors whitespace-nowrap flex items-center h-full"
                >
                  {item.label}
                  {item.dropdown && (
                    <span
                      aria-hidden="true"
                      className="inline-block h-4 w-4 shrink-0 bg-center bg-no-repeat bg-contain"
                      style={{ backgroundImage: MENU_ARROW_DOWN_BG }}
                    />
                  )}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-[170px] bg-[#C8A16A] border border-[#e8d0ab] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-1">
                      {item.dropdown?.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          className="block px-4 py-2.5 text-[16px] font-medium text-white hover:bg-[#b99159] transition-colors"
                        >
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
                className="fixed inset-0 bg-black/60 z-[60]"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
                className="md:hidden fixed top-0 left-0 w-[280px] h-full bg-[#111111] z-[70] flex flex-col shadow-2xl overflow-y-auto no-scrollbar pb-10"
                style={{ fontFamily: '"Work Sans", sans-serif' }}
              >
                {/* Header / Logo / Close */}
                <div className="flex justify-between items-center px-[30px] pt-[30px] mb-8">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-[20px] tracking-[0.1em] flex items-center leading-none">
                    <span className="font-bold text-white">LUMERA</span>
                    <span className="ml-[6px] text-[#c8a16a]">Shop</span>
                  </Link>
                  <button
                    className="text-white hover:text-[#c8a16a] transition-colors p-1"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={28} strokeWidth={1} />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col px-[30px] mb-10 space-y-1">
                  {NAV_ITEMS.map((item, idx) => {
                    const isExpanded = expandedItems.includes(item.label);
                    return (
                      <div key={idx} className="group border-b border-white/5 last:border-0">
                        <div className="flex justify-between items-center py-[10px]">
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[22px] font-normal text-[#F2F2F2] hover:text-[#c8a16a] transition-colors leading-[1.3] flex-1"
                          >
                            {item.label}
                          </Link>
                          {item.dropdown && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleExpand(item.label);
                              }}
                              className="w-12 h-10 flex items-center justify-end text-white/40 hover:text-white transition-colors"
                            >
                              <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>

                        {item.dropdown && isExpanded && (
                          <div className="pl-4 pb-4 space-y-4 pt-2">
                            {item.dropdown.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-[18px] font-light text-white/60 hover:text-[#c8a16a] transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>

                {/* Search Bar - Replicated from lumerashop.cz */}
                <div className="px-[30px] mb-10">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full h-10 bg-transparent border border-white/20 rounded-full pl-5 pr-12 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#c8a16a] transition-colors"
                    />
                    <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#c8a16a] transition-colors" />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="px-[30px] space-y-5 mb-12">
                  <a href="tel:+420606731316" className="flex items-center gap-3 text-[16px] font-normal text-[#F2F2F2] hover:text-[#c8a16a] transition-colors">
                    <Phone size={18} strokeWidth={1.5} className="text-white/60" />
                    <span>+420 606 731 316</span>
                  </a>
                  <a href="mailto:info@lumerashop.cz" className="flex items-center gap-3 text-[16px] font-normal text-[#F2F2F2] hover:text-[#c8a16a] transition-colors">
                    <Mail size={18} strokeWidth={1.5} className="text-white/60" />
                    <span>info@lumerashop.cz</span>
                  </a>
                  <a href="https://wa.me/420606731316" className="flex items-center gap-3 text-[16px] font-normal text-[#F2F2F2] hover:text-[#c8a16a] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/60">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.126 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.766-5.764-5.766zm3.392 8.221c-.142-.072-.843-.416-.973-.463-.13-.047-.225-.072-.319.072-.095.143-.367.462-.449.546-.083.084-.131.096-.273.023-.142-.072-.601-.221-1.144-.705-.423-.377-.709-.842-.792-.985-.083-.143-.009-.22.063-.291.065-.064.142-.165.213-.248.071-.083.095-.143.142-.238.047-.095.024-.179-.012-.25-.036-.071-.314-.757-.43-.104-.113-.034-.234-.142-.32-.271z" opacity=".2" />
                      <path d="M19.057 4.93C17.18 3.053 14.688 2 12.033 2 6.633 2 2.245 6.39 2.243 11.79c0 1.727.451 3.412 1.308 4.899L2 22l5.33-1.4c1.426.776 3.033 1.185 4.673 1.187h.004c5.399 0 9.789-4.39 9.791-9.79 0-2.617-1.017-5.077-2.895-6.957zm-7.024 14.75h-.003c-1.528 0-3.027-.41-4.336-1.186l-.311-.184-3.221.845.859-3.137-.203-.322c-.852-1.355-1.301-2.922-1.301-4.533 0-4.647 3.781-8.428 8.432-8.428 2.25 0 4.366.877 5.959 2.472s2.47 3.709 2.47 5.958c-.001 4.648-3.784 8.427-8.431 8.427zm4.629-6.319c-.253-.127-1.5-.741-1.732-.826-.233-.085-.403-.127-.572.127-.169.254-.656.826-.804.995-.148.169-.296.19-.549.063-.254-.127-1.072-.395-2.042-1.26-.754-.672-1.263-1.503-1.411-1.757-.148-.254-.016-.392.111-.518.114-.114.254-.296.381-.444.127-.148.17-.254.254-.423.085-.169.042-.317-.021-.444-.063-.127-.572-1.376-.783-1.884-.206-.411-.43-.45-.572-.45h-.486c-.169 0-.444.063-.677.317s-.89.868-.89 2.114 1.545 2.455 1.757 2.751c.212.296 3.041 4.643 7.365 6.513.844.364 1.574.625 2.112.796.848.269 1.621.231 2.232.131.681-.111 2.063-.844 2.353-1.659.29-.815.29-1.513.203-1.659-.088-.146-.324-.229-.623-.356z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Social Media Footer */}
                <div className="mt-auto px-[30px] pt-10 flex gap-6">
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#c8a16a] hover:border-[#c8a16a] transition-all">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#c8a16a] hover:border-[#c8a16a] transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#c8a16a] hover:border-[#c8a16a] transition-all">
                    {/* TikTok Custom SVG */}
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.15-.1-.3-.21-.45-.32-.01 1.03-.02 2.06-.03 3.09 0 .59-.04 1.18-.12 1.77-.14 1.11-.46 2.19-1.04 3.16-.9 1.58-2.43 2.87-4.18 3.48-1.74.61-3.69.69-5.48.24-1.7-.44-3.23-1.52-4.27-2.92-1.04-1.4-1.56-3.15-1.51-4.89.06-1.74.65-3.46 1.75-4.8 1.11-1.36 2.7-2.31 4.45-2.65 1.48-.28 3.02-.19 4.45.27.01 1.43.01 2.86.02 4.29-.86-.41-1.84-.57-2.79-.44-.95.12-1.87.58-2.5 1.3-.63.72-.94 1.7-.86 2.65.07.95.53 1.84 1.25 2.47.72.63 1.7.94 2.65.86.95-.07 1.84-.53 2.47-1.25.13-.15.25-.3.35-.46.3-.53.44-1.13.43-1.74-.01-4.96-.02-9.92-.03-14.88z" />
                    </svg>
                  </a>
                </div>
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
                    {totalItems}
                  </div>
                </div>

                {/* Content */}
                {cartItems.length > 0 ? (
                  <div className="flex-1 overflow-y-auto p-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 mb-6 pb-6 border-b border-gray-50 last:border-0 last:pb-0 last:mb-0 relative group">
                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
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
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-500 hover:text-gray-900 text-lg leading-none"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              readOnly
                              className="w-8 text-center text-[13px] text-gray-900 font-medium focus:outline-none"
                            />
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-500 hover:text-gray-900 text-lg leading-none"
                            >
                              +
                            </button>
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
                        <span>{totalPrice.toLocaleString('cs-CZ')} Kč</span>
                      </div>
                      <div className="flex justify-between items-center text-[14px] text-gray-600">
                        <span>Včetně DPH</span>
                        <span>{(totalPrice * 0.21).toLocaleString('cs-CZ', { maximumFractionDigits: 2 })} Kč</span>
                      </div>
                      <div className="flex justify-between items-center text-[14px] text-gray-600">
                        <span>Doprava</span>
                        <span className="font-semibold text-gray-900 text-[#2196F3]">Zdarma!</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                        <span className="text-[16px] font-bold text-gray-900">Celkem</span>
                        <span className="text-[16px] font-bold text-gray-900">{totalPrice.toLocaleString('cs-CZ')} Kč</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[15px] font-semibold text-gray-900">Celkem</span>
                      <span className="text-[15px] font-semibold text-gray-900">0,00 Kč</span>
                    </div>
                  )}

                  {cartItems.length > 0 ? (
                    <Link
                      href="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="w-full h-[48px] bg-[#c78d02] hover:bg-[#b07c02] text-white text-[15px] font-semibold rounded-md transition-colors flex items-center justify-center gap-2 mb-2"
                    >
                      Zobrazit košík
                    </Link>
                  ) : null}
                  {cartItems.length > 0 ? (
                    <button
                      className="w-full h-[48px] border border-[#c78d02] text-[#c78d02] hover:bg-gray-50 text-[15px] font-semibold rounded-md transition-colors flex items-center justify-center gap-2"
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
