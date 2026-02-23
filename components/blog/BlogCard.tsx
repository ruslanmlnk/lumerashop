'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/site';

const BlogCard = ({ post }: { post: BlogPost }) => {
    return (
        <article className="group flex flex-col bg-white">
            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden mb-6">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1000ms]"
                />
            </Link>
            <div className="flex flex-col flex-1">
                <h2
                    className="text-[24px] md:text-[28px] font-serif font-bold text-[#111111] mb-4 group-hover:text-amber-800 transition-colors leading-tight"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h2>
                <p className="text-[16px] text-gray-500 leading-relaxed font-light mb-6">
                    {post.excerpt}
                </p>
                <div className="mt-auto">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-block text-[13px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-amber-800 hover:border-amber-800 transition-all"
                    >
                        Číst více
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
