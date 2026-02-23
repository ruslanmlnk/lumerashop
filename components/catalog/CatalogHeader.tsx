'use client';
import Link from 'next/link';

interface Breadcrumb {
    label: string;
    href?: string;
}

interface CatalogHeaderProps {
    title: string;
    breadcrumbs: Breadcrumb[];
}

const CatalogHeader = ({ title, breadcrumbs }: CatalogHeaderProps) => {
    return (
        <div className="bg-[#f9f9f9] py-8 border-b border-neutral-100">
            <div className="max-w-[1140px] mx-auto px-4 lg:px-0">
                <nav className="flex mb-4" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 text-[13px] text-gray-400 font-sans">
                        <li>
                            <Link href="/" className="hover:text-black transition-colors uppercase tracking-wider">
                                Domů
                            </Link>
                        </li>
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <span className="text-gray-300">/</span>
                                {crumb.href ? (
                                    <Link href={crumb.href} className="hover:text-black transition-colors uppercase tracking-wider">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-black uppercase tracking-wider font-medium">{crumb.label}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
                <h1
                    className="text-[42px] font-serif font-bold text-[#111111] leading-tight"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default CatalogHeader;
