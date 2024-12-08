import { getAllBlogs } from "@/services/blogs";
import { BlogCard } from "./blog-card"

export default function Blogs() {
    const blogs = getAllBlogs();
    return (
        <section className="py-12 bg-gray-50 dark:bg-background min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((post) => (
                        <BlogCard
                            key={post.slug}
                            title={post.title}
                            description={post.description}
                            author={post.author}
                            imageUrl={post.imageUrl}
                            slug={post.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

