import Link from "next/link"

interface PostProps {
  id: string
  description: string
  url: string
  social_image: string
  title: string
  readable_publish_date: string
  reading_time_minutes: number
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
    <div className="max-[600px]:mt-20 max-[600px]:w-11/12  w-7/12 h-auto flex flex-col items-center gap-6">
      {
        data.slice(0, 3).map((element: PostProps, index: number) => (
          <Link key={index} href={element.url}>
            <div className="w-full h-auto p-9 rounded-xl bg-slate-800 bg-opacity-40 hover:bg-opacity-70 hover:cursor-pointer">
              <h1 className="text-2xl font-bold">{element.title}</h1>
              <div className="w-full h-auto flex flex-row gap-10 mt-3 text-slate-300  hover:cursor-pointer">
                <label className="font-extralight  hover:cursor-pointer" >{element.readable_publish_date}</label>
                <label className="font-extralight  hover:cursor-pointer">{element.reading_time_minutes} min</label>
              </div>
              <div className="mt-5 hover:cursor-pointer">
                <label className="font-extralight  hover:cursor-pointer">{element.description}</label>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}