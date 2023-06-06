"use client"
import Link from 'next/link'
import { FaTwitterSquare, FaLinkedin, FaGithubSquare, FaYoutubeSquare } from 'react-icons/fa'
import { memo } from 'react'

const SocialLinks = () => {
  return (
    <div className='max-[600px]:w-full max-[600px]:gap-6 max-[600px]:self-center max-[600px]:mt-10 h-auto md:w-auto flex md:flex-row gap-5 mt-5 justify-between'>
      <Link href={`https://twitter.com/dougyoshii`} target='_blank'>
        <div className='flex flex-row max-[600px]:flex-col gap-2 items-center p-1 rounded-md'>
          <FaTwitterSquare className='hover:cursor-pointer' size={24} />
          <label className='hover:cursor-pointer' >Twitter</label>
        </div>
      </Link>
      <Link href={`https://github.com/douglas-henrique`} target='_blank'>
        <div className='flex flex-row gap-2 items-center p-1 rounded-md max-[600px]:flex-col '>
          <FaGithubSquare className='hover:cursor-pointer' size={24} />
          <label className='hover:cursor-pointer' >GitHub</label>
        </div>
      </Link>
      <Link href={`https://www.youtube.com/channel/UCIMpIRnb3xlmuZ2_rkdUttA`} target='_blank'>
        <div className='flex flex-row gap-2 items-center p-1 rounded-md max-[600px]:flex-col '>
          <FaYoutubeSquare className='hover:cursor-pointer' size={24} />
          <label className='hover:cursor-pointer'>Youtube</label>
        </div>
      </Link>
      <Link href={`https://www.linkedin.com/in/douglas-henrique-532258230/`} target='_blank'>
        <div className='flex flex-row gap-2 items-center p-1 rounded-md max-[600px]:flex-col '>
          <FaLinkedin size={24} className='hover:cursor-pointer' />
          <label className='hover:cursor-pointer '>Linkedin</label>
        </div>
      </Link>
    </div>
  )
}

export default memo(SocialLinks)