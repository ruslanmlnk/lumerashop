import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-gray-900">
          LUMERA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide font-medium text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Domů</Link>
          <Link href="/kabelky" className="hover:text-black transition-colors">Kabelky</Link>
          <Link href="/batohy" className="hover:text-black transition-colors">Batohy</Link>
          <Link href="/pasky" className="hover:text-black transition-colors">Pásky</Link>
          <Link href="/o-nas" className="hover:text-black transition-colors">O nás</Link>
          <Link href="/kontakt" className="hover:text-black transition-colors">Kontakt</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:text-black text-gray-600 transition-colors">
            <Search size={20} />
          </button>
          <Link href="/account" className="hidden md:block p-2 hover:text-black text-gray-600 transition-colors">
            <User size={20} />
          </Link>
          <Link href="/cart" className="p-2 hover:text-black text-gray-600 transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">0</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col p-4 space-y-4 text-sm uppercase tracking-wide font-medium text-gray-600">
            <Link href="/" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Domů</Link>
            <Link href="/kabelky" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Kabelky</Link>
            <Link href="/batohy" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Batohy</Link>
            <Link href="/pasky" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Pásky</Link>
            <Link href="/o-nas" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>O nás</Link>
            <Link href="/kontakt" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>Kontakt</Link>
            <hr className="my-2 border-gray-100" />
            <Link href="/account" className="flex items-center space-x-2 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>
              <User size={18} />
              <span>Můj účet</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
