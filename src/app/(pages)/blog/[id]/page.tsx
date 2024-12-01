import React from 'react'
import fs from "fs";
import matter from 'gray-matter';
import path from "path";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { notFound } from 'next/navigation';


function getBlog(id: string | null) {
    if (!id) return null
    // Get the directory path
    const blogsDir = path.join(process.cwd(), "src/content");

    // Read all the files in the directory
    const files = fs.readdirSync(blogsDir);

    // Find the file that matches the id
    const file = files.find((file) => file === `${id}.md`);

    // If the file doesn't exist, return null or throw an error
    if (!file) {
        console.error(`File not found: ${id}.md`);
        return null;
    }

    // Read the file content
    const filePath = path.join(blogsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Return the file content as a string
    return fileContent;
}


export default async function Page({ params }: {
    params: { id: string | null }
}) {
    const blogContent = getBlog(params?.id);
    if (!blogContent) {
        notFound()
        return
    }
    const { data, content } = matter(blogContent)
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })

    const htmlContent = (await processor.process(content)).toString()
    return (
        <div className="max-w-6xl mx-auto p-4">
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
