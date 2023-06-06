"use client"
import { motion } from 'framer-motion';
import CardSpotlight from '@/components/CardSpotlight';
import type { PostProps } from "@/helpers/sharedTypes";
import Link from 'next/link';

export default function BlogPosts({ posts }: { posts: PostProps[] }) {

  return (
    <motion.div className='flex flex-col w-8/12 p-10 pl-20 max-[600px]:w-full max-[600px]:p-5 '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className='text-3xl font-bold max-[600px]:self-center'> Blog posts </h1>
      <div className="grid grid-cols-2 gap-4 mt-5 max-[600px]:grid-cols-1">
        {
          posts.map((element: PostProps, index: number) => (
            <Link key={index} href={`/blog/post/${element.slug}`}>
              <CardSpotlight post={element} />
            </Link>
          ))
        }
      </div>
    </motion.div>
  )
}