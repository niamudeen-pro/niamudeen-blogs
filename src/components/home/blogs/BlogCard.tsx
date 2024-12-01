import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { BlogCardProps } from '@/app/(pages)/blog/[id]/types'

export function BlogCard({
    title,
    description,
    author,
    imageUrl,
    slug,
}: BlogCardProps) {
    return (
        <Card className="overflow-hidden">
            <AspectRatio ratio={16 / 9}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </AspectRatio>
            <CardHeader>
                <CardTitle className="line-clamp-2">{title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                    By {author}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                    <Link href={`/blog/${slug}`} className="flex items-center justify-center">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

