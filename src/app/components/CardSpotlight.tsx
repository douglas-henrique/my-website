"use client"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { FaHeart } from 'react-icons/fa'

interface PostProps {
  post: {
    id: string
    description: string
    url: string
    social_image: string
    title: string
    readable_publish_date: string
    reading_time_minutes: number
    public_reactions_count: number
  }
}

export default function CardSpotlight({ post }: PostProps) {

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative max-w-3xl rounded-xl border border-white/10 bg-slate-800 bg-opacity-40 px-8 py-9 shadow-2xl max-[600px]:w-full"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <h3 className="font-semibold leading-7">
          {post.readable_publish_date}
        </h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-3xl max-[600px]:text-2xl font-bold  text-white">
            {post.title}
          </span>
        </div>
        <p className="mt-6 leading-7 text-gray-300">
          {post.description}
        </p>

        <div className="w-full h-12 mt-5 flex flex-row justify-between items-center ">
          <label>{post.reading_time_minutes} min read</label>
          {
            post.public_reactions_count > 0 && ( 
              <div className="flex flex-row items-center gap-2">{post.public_reactions_count} <FaHeart size={18} /></div>
            )
          }
        </div>
      </div>
    </div>
  )
}