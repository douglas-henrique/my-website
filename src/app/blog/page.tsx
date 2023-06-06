import BlogPosts from "@/components/BlogPosts"
import { getPosts } from '@/helpers/fetch'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Douglas Yoshi - Fullstack developer, frontend specialist",
  description: "Here you can find articles about tech, frontend and life",
  metadataBase: new URL("https://www.dougdev.com.br/codes"),
  openGraph: {
    images: ['/avatar.png'],
    description: "Here you can find articles about tech, frontend and life",
    type: 'website',
    url: 'https://www.dougdev.com.br/codes',
    title: "Gist Codes | Douglas Yoshi - Fullstack developer, frontend specialist",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog | Douglas Yoshi - Fullstack developer, frontend specialist",
    images: ['/avatar.png'],
    description: "Here you can find articles about tech, frontend and life",
  }
};

export default async function Blog() {
  const data = await getPosts()
  return <BlogPosts posts={data} />
}