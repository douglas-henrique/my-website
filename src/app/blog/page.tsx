import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import CardSpotlight from '@/components/CardSpotlight';
import type { PostProps } from "@/helpers/sharedTypes";

export const metadata: Metadata = {
  title: "Blog | Douglas Yoshi - Fullstack developer, frontend specialist",
  description: "Here you can find articles about tech, frontend and life",
  metadataBase: new URL("https://www.dougdev.com.br/codes"),
  openGraph: {
    images: ['/avatar.png'],
    description: "Here you can find articles about tech, frontend and life",
    type: 'website',
    url: 'https://www.dougdev.com.br/codes',
    title: "Gist Codes | Douglas Yoshi - Fullstack developer, frontend specialist",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog | Douglas Yoshi - Fullstack developer, frontend specialist",
    images: ['/avatar.png'],
    description: "Here you can find articles about tech, frontend and life",
  }
};

async function getPosts() {
  const res = await fetch('https://dev.to/api/articles?username=dougyoshii', { next: { revalidate: 60 } })
  if (!res.ok) {
    throw new Error('Failed to fetch Posts');
  }
  return res.json();
}


export default async function Blog() {
  const posts = await getPosts()
  return (
    <Suspense fallback={<div className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white" role="status" aria-label="loading">
      <span className="sr-only">Loading...</span>
    </div>}>
      <section className='flex flex-col  max-h-full w-8/12 p-20 max-[600px]:w-full max-[600px]:p-10'>
        <h1 className='text-4xl font-extrabold max-[600px]:self-center'>Articles. Experiences. Life. </h1>
        <p className='mt-2'>Here you can find some of my stories</p>
        <h2 className='text-3xl font-bold mt-16'>Recent posts</h2>
        <div className='w-full h-auto grid grid-cols-2 gap-4 mt-5 max-[600px]:grid-cols-1'>
          {
            posts.splice(0, 2).map((element: PostProps, index: number) => (
              <Link key={index} href={`/blog/post/${element.slug}`}>
                <CardSpotlight>
                  <div className="flex flex-col">
                    <h3 className="font-semibold leading-7"> {element.readable_publish_date} </h3>
                    <div className="mt-2 flex items-center gap-x-2">
                      <span className="text-3xl max-[600px]:text-2xl font-bold"> {element.title} </span>
                    </div>
                    <p className="mt-6 leading-7 mb-10"> {element.description} </p>
                    <div className="w-10/12 h-12 flex justify-between items-center  bottom-0 absolute ">
                      <label>{element.reading_time_minutes} min read</label>
                      {
                        element.public_reactions_count > 0 && (
                          <div className="flex flex-row items-center gap-2">{element.public_reactions_count}  ♥️</div>
                        )
                      }
                    </div>
                  </div>
                </CardSpotlight>
              </Link>
            ))
          }
        </div>

        <h3 className='font-bold text-3xl mt-20 mb-5'>All posts</h3>
        {
          posts.splice(0, posts.length).map((element: PostProps, index: number) => (
            <Link key={index} href={`/blog/post/${element.slug}`}>
              <article key={index} className='w-full my-2 py-2 transition ease-in-out delay-75 hover:scale-110 rounded-md duration-300  hover:bg-white hover:bg-opacity-10 p-2'>
                <h4 className='font-bold text-xl'>{element.title}</h4>
                <p className='my-2 font-light'>{element.description}</p>
              </article>
            </Link>
          )
          )
        }
      </section>
    </Suspense>

  )

}