'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
    images: string[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="flex flex-col w-full">
            {/* Main Image Viewport */}
            <div className="relative aspect-[1/1] md:aspect-[4/5] bg-white overflow-hidden group mb-6">
                <Image
                    src={images[activeIndex]}
                    alt={`Product image ${activeIndex + 1}`}
                    fill
                    className="object-contain transition-opacity duration-500"
                    priority
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm z-10"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm z-10"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails at bottom */}
            {images.length > 1 && (
                <div className="flex justify-center gap-3 overflow-x-auto py-2 no-scrollbar">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`relative w-20 h-20 flex-shrink-0 transition-all border-b-2 ${activeIndex === idx ? 'border-[#c8a16a]' : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-contain p-1"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductGallery;
