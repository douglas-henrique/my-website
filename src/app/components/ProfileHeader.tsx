import Image from 'next/image'
import SocialLinks from './SocialLinks'

export default function ProfileHeader() {
  return (
    <div className="max-[600px]:w-screen max-[600px]:p-5 max-[600px]:mt-5 md:w-7/12 h-96 p-9 mt-20 flex flex-col gap-2 ">
      <div className="max-[600px]:w-screen flex md:w-full h-32 p-2 flex-row items-center align-middle gap-2">
        <Image alt='Avatar image' className='rounded-full max-[600px]:hidden ' width={100} height={100} src='/avatar.png' />
        <div className="max-[600px]:w-screen md:ml-2 w-full h-full flex align-middle justify-center flex-col ">
          <h3 className='text-2xl font-bold '>Douglas Yoshi</h3>
          <p className='font-normal'>Frontend Specialist at @Árvore</p>
        </div>
      </div>
      <div className="max-[600px]:w-screen max-[600px]:ml-2 md:w-full h-20">
        <p className='font-light max-[600px]:w-11/12'>{`Welcome to my digital world where I share my knowledges helping people to built beautiful web applications 🌏 `} </p>
      </div>
      <SocialLinks />
    </div>
  )
}