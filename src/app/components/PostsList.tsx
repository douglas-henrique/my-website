import Link from "next/link"
import CardSpotlight from "./CardSpotlight"

interface PostProps {
  id: string
  description: string
  url: string
  social_image: string
  title: string
  readable_publish_date: string
  reading_time_minutes: number
  public_reactions_count: number
}

async function getData() {
  const devToUrl = "https://dev.to/api/articles?username=dougyoshii"
  const res = await fetch(devToUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch Posts');
  }
  return res.json();
}

export default async function PostsList() {
  const data = await getData();

  return (
    <div className="max-[600px]:mt-5
    max-[600px]:m-8 h-auto 
    flex flex-col items-center gap-6
    sm:w-full lg:w-10/12 2xl:w-8/12">
      {
        data.slice(0, 3).map((element: PostProps, index: number) => (
          <Link key={index} href={element.url}>
            <CardSpotlight post={element}  />
          </Link>
        ))
      }
    </div>
  )
}