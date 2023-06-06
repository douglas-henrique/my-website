import BlogPosts from "@/components/BlogPosts"
import { getPosts } from '@/helpers/fetch'

export default async function Blog(){
  const data = await getPosts()
  return <BlogPosts posts={data} />
}