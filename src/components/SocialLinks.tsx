"use client"
import Link from 'next/link'
import { memo } from 'react'

const SocialLinks = () => {
  return (
    <footer className='flex h-13 w-full py-2 justify-center gap-5 items-center bottom-0'>
      <Link href={`https://twitter.com/dougyoshii`} target='_blank'>
        <div className='flex flex-row max-[600px]:flex-col gap-2 items-center p-1 rounded-md'>
          <label className='hover:cursor-pointer'>twitter</label>
        </div>
      </Link>
      <Link href={`https://github.com/douglas-henrique`} target='_blank'>
        <div className='flex flex-row gap-2 items-center p-1 rounded-md max-[600px]:flex-col '>
          <label className='hover:cursor-pointer' >github</label>
        </div>
      </Link>
      <Link href={`https://www.youtube.com/channel/UCIMpIRnb3xlmuZ2_rkdUttA`} target='_blank'>
        <div className='flex flex-row gap-2 items-center p-1 rounded-md max-[600px]:flex-col '>
          <label className='hover:cursor-pointer'>youtube</label>
        </div>
      </Link>
      <Link href={`https://www.linkedin.com/in/douglas-henrique-532258230/`} target='_blank'>
        <div className='flex flex-row gap-2 items-center p-1 rounded-md max-[600px]:flex-col '>
          <label className='hover:cursor-pointer '>linkedin</label>
        </div>
      </Link>
    </footer>
  )
}

export default memo(SocialLinks)