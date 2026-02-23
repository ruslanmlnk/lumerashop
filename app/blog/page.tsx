import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { BLOG_POSTS } from '@/data/site-data';

export default function BlogPage() {
    return (
        <div className="min-h-screen font-sans text-[#111111] bg-white">
            <Header />

            <main>
                <BlogHero />

                <div className="max-w-[1140px] mx-auto px-4 lg:px-0 py-20">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="flex-1 space-y-20">
                            {BLOG_POSTS.map((post, idx) => (
                                <BlogCard key={idx} post={post} />
                            ))}
                        </div>

                        <BlogSidebar />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
