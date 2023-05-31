import Link from "next/link"
import CardSpotlight from "./CardSpotlight"
import type { PostProps } from "@/helpers/sharedTypes";

async function getData() {
  const devToUrl = `${process.env.DEV_TO_API}/articles?username=${process.env.DEV_TO_USER}`
  const res = await fetch(devToUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch Posts');
  }
  return res.json();
}

export default async function PostsList() {
  const data = await getData();
  console.log(data)

  return (
    <div className="max-[600px]:mt-5
    max-[600px]:m-8 h-auto 
    flex flex-col items-center gap-6
    sm:w-full lg:w-10/12 2xl:w-8/12">
      {
        data.map((element: PostProps, index: number) => (
          <Link key={index} href={`/post/${element.slug}`}>
            <CardSpotlight post={element} />
          </Link>
        ))
      }
    </div>
  )
}