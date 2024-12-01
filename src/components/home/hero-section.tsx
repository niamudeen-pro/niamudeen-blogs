import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="container px-4 py-10 mx-auto lg:h-[32rem] lg:space-x-8 lg:flex lg:items-center">
            <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
                <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
                    Welcome to <span className="font-semibold">Our Blog</span>{' '}
                    <span className="font-semibold underline decoration-primary">Sharing Ideas and Insights</span>
                </h1>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                    Stay updated with the latest posts on technology, trends, and community insights.{' '}
                    <br className="hidden lg:block" /> Explore expert opinions, tutorials, and more to fuel your curiosity!
                </p>

            </div>
            <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
                <Image
                    src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
                    alt="tailwind css components"
                    width={500}
                    height={500}
                    className="w-full h-full max-w-md mx-auto"
                />
            </div>
        </section>
    )
}
