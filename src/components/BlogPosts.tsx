"use client"
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa'
import CardSpotlight from '@/components/CardSpotlight';
import Link from 'next/link';
import type { PostProps } from "@/helpers/sharedTypes";


const CardBody = ({ post }: { post: PostProps }) => {
  return (
    <div>
      <h3 className="font-semibold leading-7"> {post.readable_publish_date} </h3>
      <div className="mt-2 flex items-center gap-x-2">
        <span className="text-3xl max-[600px]:text-2xl font-bold text-black"> {post.title} </span>
      </div>

      <p className="mt-6 leading-7 text-black"> {post.description} </p>

      <div className="w-full h-12 mt-5 flex flex-row justify-between items-center ">
        <label className="text-black">{post.reading_time_minutes} min read</label>
        {
          post.public_reactions_count > 0 && (
            <div className="flex flex-row items-center gap-2">{post.public_reactions_count} <FaHeart size={18} /></div>
          )
        }
      </div>
    </div>
  )
}

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
              <CardSpotlight>
                <CardBody post={element} />
              </CardSpotlight>
            </Link>
          ))
        }
      </div>
    </motion.div>
  )
}