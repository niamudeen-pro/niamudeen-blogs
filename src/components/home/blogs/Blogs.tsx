import { BlogCard } from "./BlogCard"
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

function getBlogs() {
    // Get the directory path
    const blogsDir = path.join(process.cwd(), "src/content");

    // Read all the files in the directory
    const files = fs.readdirSync(blogsDir);

    if (files?.length === 0) return [];
    const blogs = files.map((file) => {
        const filePath = path.join(blogsDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);
        return data
    })
    return blogs || []
}

export default function Blogs() {
    const blogs = getBlogs();
    return (
        <section className="py-12 bg-gray-50 dark:bg-background ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            </div>
        </section>
    )
}

