'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
    images: string[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`relative w-20 h-24 flex-shrink-0 border-2 transition-all ${activeImage === img ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Product thumbnail ${idx + 1}`}
                            fill
                            className="object-contain p-1"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="order-1 md:order-2 flex-1 relative aspect-[14/17] bg-[#f9f9f9] overflow-hidden group">
                <Image
                    src={activeImage}
                    alt="Product main image"
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-[1500ms]"
                    priority
                />
            </div>
        </div>
    );
};

export default ProductGallery;
