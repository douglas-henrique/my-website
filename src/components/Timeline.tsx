"use client"
import { motion } from 'framer-motion';
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'

import useWindowSize from '@/helpers/useWindowSize';
export default function Timeline() {
  const { width } = useWindowSize()

  if (typeof window === undefined) {
    return <div>Loading</div>
  }

  if (width > 600) {
    return (
      <motion.section className="container mx-auto w-8/12 h- max-[600px]:w-full max-[600px]:mt-20 " initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <h1 className='text-3xl font-bold'>My experiences </h1>
        <div className="relative wrap p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
          <motion.div
            className="mb-8 flex justify-between items-center w-full right-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">2022</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Frontend specialist at <Link target='_blank' href={`https://www.arvore.com.br`} className='text-red-400'>@arvore</Link> 🌳 </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{`Responsible to create the new reader service and increase the user experience on the mobile app and web. Creator of the new mobile app using react native and mantainer of the bonsai design system. `}</p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2021</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-black text-xl">Tech lead at <Link target='_blank' className='text-red-400' href={`https://www.provi.com.br`}>@provi</Link></h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{`Creator of a squad called "growth". This squad is responsible to care about the company website. I hired 3 web developers to compose this new squad and we did a great job using NextJS. But before that, I worked on a project called "ProviPay". This project is basically a marketplace that allow the student to buy courses using credit card or paying the entire value.
            `}</p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between items-center w-full right-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">2018</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">CTO from a small company @garnon </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{`In this company I had the opportunity to create new skills like negotiation, selling and comunication. We had products like CMS and ERP's maded using laravel and vue.js. We had 12 developers working on the company. It was very good for me and I'm glad for all of this. `}</p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2017</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-black text-xl">Software Engineer at <Link target='_blank' className='text-red-400' href={`https://hmz-solutions.com/`}>@hurmez</Link></h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{`I worked with ASP.NET MVC at this time. It was new for me. We also used Angular JS for the frontend. 
            `}</p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between items-center w-full right-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">2016</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-black text-xl">Native Android developer at <Link target='_blank' className='text-red-400' href={`https://www.imusics.com//`}>@imusics</Link></h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{`Responsible to create the first one android application of the company. This app was maded in Java using the MVVM pattern and consuming a ruby rest api. `}</p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-24 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2015</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-black text-xl">Native Android developer at @moneto</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{`My first experience with native development using Java. I was part of the team and in the end of the experience, I was the mobile tech lead. `}</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    )
  } 
}