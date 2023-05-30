"use client"
import { memo } from 'react'
import Link from 'next/link'
import { FaTwitterSquare, FaLinkedin, FaGithubSquare, FaYoutubeSquare } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MiniHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className='flex items-center sm:pl-5 sm:pr-5 pl-10 pr-10 p-5 rounded-2xl backdrop-opacity-20 bg-slate-100/10 mt-5 justify-between max-[600px]:pl-3 max-[600px]:pr-3'>
      <Link href={'/'}>
        <img alt='Avatar image' src='/avatar.png' className='rounded-full h-12' />
      </Link>
      <div className='flex flex-row'>
        <Link href={`https://twitter.com/dougyoshii`}>
          <div className='flex flex-row max-[600px]:flex-col gap-2 items-center p-1 rounded-md max-[600px]:ml-4 ml-16 '>
            <FaTwitterSquare className='hover:cursor-pointer max-[600px]:text-md' />
            <label className='hover:cursor-pointer max-[600px]:text-sm' >Twitter</label>
          </div>
        </Link>
        <Link href={`https://github.com/douglas-henrique`}>
          <div className='flex flex-row gap-2 items-center p-1 rounded-md max-[600px]:flex-col ml-4 max-[600px]:ml-2 '>
            <FaGithubSquare className='hover:cursor-pointer max-[600px]:text-md' />
            <label className='hover:cursor-pointer max-[600px]:text-sm  max-[600px]:text-md' >GitHub</label>
          </div>
        </Link>
        <Link href={`https://www.youtube.com/channel/UCIMpIRnb3xlmuZ2_rkdUttA`}>
          <div className='flex flex-row gap-2 items-center p-1 rounded-md max-[600px]:flex-col ml-4 max-[600px]:ml-2 '>
            <FaYoutubeSquare className='hover:cursor-pointer  max-[600px]:text-md' />
            <label className='hover:cursor-pointer max-[600px]:text-sm  max-[600px]:text-md'>Youtube</label>
          </div>
        </Link>
        <Link href={`https://www.linkedin.com/in/douglas-henrique-532258230/`}>
          <div className='flex flex-row gap-2 items-center p-1 rounded-md max-[600px]:flex-col ml-4 max-[600px]:ml-2'>
            <FaLinkedin className='hover:cursor-pointer max-[600px]:text-md ' />
            <label className='hover:cursor-pointer max-[600px]:text-sm'>Linkedin</label>
          </div>
        </Link>
      </div>

    </motion.div>
  )
}

export default memo(MiniHeader)