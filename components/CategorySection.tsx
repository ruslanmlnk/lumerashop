type CategoryProps = {
    title: string;
    description: string;
    image: string;
    link: string;
    linkText: string;
    reversed?: boolean;
};

const CategorySection = ({ title, description, image, link, linkText, reversed }: CategoryProps) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                    <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden group">
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">{title}</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                            {description}
                        </p>
                        <a
                            href={link}
                            className="inline-block border-b-2 border-black pb-1 text-sm uppercase tracking-widest font-bold hover:text-gray-600 hover:border-gray-600 transition-colors"
                        >
                            {linkText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
