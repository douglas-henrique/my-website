"use client"
import { motion } from 'framer-motion'
export default function HomeGreeting() {
  var date = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <motion.section
      className='h-56 flex flex-col w-7/12 justify-center p-10 max-[600px]:w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}  >
    
      <motion.label
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className='mt-5'
      >
        Douglas Yoshi—Fullstack Developer
      </motion.label>
      <motion.h1 className='font-extrabold text-4xl mt-4 max-w-5xl'>
        Hi, happy {date} 🙋🏻
      </motion.h1>
      <motion.p
        className='mt-4 max-w-5xl font-medium'>
        Welcome to my digital world where I share my knowledges helping people to build beautiful web applications. 🌏
      </motion.p>
    </motion.section>
  )
}