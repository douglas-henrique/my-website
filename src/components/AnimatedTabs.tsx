"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter, usePathname} from "next/navigation";
// import { useRouter } from 'next/router';

interface TabProps {
  id: string
  label: string
  url: string
}

let tabs: TabProps[] = [
  { id: "home", label: "Home", url: '/' },
  { id: "about", label: "About me", url: '/about' },
  { id: "blog", label: "Blog", url: '/blog' }
];

export default function AnimatedTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (tab: TabProps) => {
    router.push(tab.url)
  }

  return (
    <motion.div className="flex space-x-1 mt-10" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleClick(tab)}
          className={`${tab.url === pathname ? "" : "hover:text-black/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {tab.url === pathname && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 border-2 border-gray-950 mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </motion.div>
  );
}