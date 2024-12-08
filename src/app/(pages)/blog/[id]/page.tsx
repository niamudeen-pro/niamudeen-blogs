import React from 'react'
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { getAllBlogs, getSingleBlog } from '@/services/blogs';
import formatBlogContent from '@/utils/blogs';

export async function generateStaticParams() {
    const blogs = getAllBlogs();
    return blogs.map((blog) => ({
        id: blog.slug.toString()
    }))
}

export async function generateMetadata({ params }: { params: { id: string | null } }) {
    const blogContent = getSingleBlog(params?.id);
    if (blogContent) {
        const { data } = matter(blogContent)
        return {
            title: data.title,
            description: data.description,
        }
    }
}


export default async function Page({ params }: {
    params: { id: string | null }
}) {
    const blogContent = getSingleBlog(params?.id);
    if (!blogContent) {
        notFound()
        return
    }
    const { data, content } = matter(blogContent)
    const htmlContent = await formatBlogContent(content)
    return (
        <div className="max-w-6xl mx-auto p-4 mt-10 sm:mt-14">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-4">{new Date(data.date).toLocaleDateString()}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert max-w-none blog_content"></div>
        </div>
    )
}
