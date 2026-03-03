import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import { BLOG_POSTS } from '@/data/site-data';

export default function BlogPage() {
    return (
        <div className="min-h-screen font-sans text-[#111111] bg-white">
            <Header />

            <main className="pt-[110px] md:pt-[130px]">
                <BlogHero />

                <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-20 md:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {BLOG_POSTS.map((post, idx) => (
                            <BlogCard key={idx} post={post} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
