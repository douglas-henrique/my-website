"use client"
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

interface TabProps {
  id: string
  label: string
  url: string
}

let tabs: TabProps[] = [
  { id: "home", label: "Home", url: '/' },
  { id: "about", label: "About me", url: '/about' },
  { id: "blog", label: "Blog", url: '/blog' },
  { id: "codes", label: "My codes", url: '/codes' }
];

export default function AnimatedTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (tab: TabProps) => router.push(tab.url)

  return (
    <motion.nav className="flex space-x-1 mt-10 max-[600px]:mt-20" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleClick(tab)}
          className={`${tab.url === pathname ? "" : "hover:text-white/60"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {tab.url === pathname && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 border-2 border-white"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </motion.nav>
  );
}