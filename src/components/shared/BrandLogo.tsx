import Link from 'next/link'
import React from 'react'

export default function BrandLogo() {
    return (
        <Link href="/" className="text-xl">
            Niamudeen <span className="font-semibold text-blue-500 dark:text-blue-500">Blogs
            </span>
        </Link>
    )
}
