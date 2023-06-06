"use client"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { FaHeart } from 'react-icons/fa'
import type { PostProps as PostInterface } from "@/helpers/sharedTypes";

interface PostProps { post: PostInterface }

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
    <motion.div
      className="group relative max-w-xl rounded-xl border border-white/10 bg-white bg-opacity-40 px-8 py-9 shadow-2xl max-[600px]:w-full"
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      whileHover={{ scale: 1.01}}

    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 133, 167, .25),
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
          <span className="text-3xl max-[600px]:text-2xl font-bold text-black">
            {post.title}
          </span>
        </div>
        <p className="mt-6 leading-7 text-black">
          {post.description}
        </p>

        <div className="w-full h-12 mt-5 flex flex-row justify-between items-center ">
          <label className="text-black">{post.reading_time_minutes} min read</label>
          {
            post.public_reactions_count > 0 && (
              <div className="flex flex-row items-center gap-2">{post.public_reactions_count} <FaHeart size={18} /></div>
            )
          }
        </div>
      </div>
    </motion.div>
  )
}