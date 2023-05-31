import MiniHeader from "@/app/components/MiniHeader"
import type { PostProps } from "@/helpers/sharedTypes";
import { Metadata, ResolvingMetadata } from 'next';

async function getData(id: number) {
  const devToUrl = `${process.env.DEV_TO_API}/articles/${id}`
  const res = await fetch(devToUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch Posts');
  }
  return res.json();
}

interface PostFullProps extends PostProps {
  body_html: string,
  tags: string[]
  positive_reactions_count: number
}



export async function generateMetadata(
  { params }: { params: { id: string } },
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const data: PostFullProps = await getData(parseInt(params.id));

  return {
    title: data.title,
    metadataBase: new URL("https://www.dougdev.com.br"),
    openGraph: {
      images: [data.social_image],
      description: data.description,
      type: 'article',
      url: 'https://www.dougdev.com.br/post/' + params.id,
      title: data.title,
    },
  };
}



export default async function Post({ params }: { params: { id: string } }) {
  const data: PostFullProps = await getData(parseInt(params.id));
  return (
    <main className={`flex w-full min-h-screen flex-col items-center p-5 `} >
      <MiniHeader />
      <div className="w-6/12 h-auto p-5 mt-5 2xl:w-5/12 sm:w-10/12 max-[600px]:w-full">
        <div className="w-full h-11 flex flex-row items-center gap-5">
          <label>{data.reading_time_minutes} min read</label>
          {
            data.public_reactions_count > 0 && (
              <div className="flex flex-row items-center gap-2">{data.positive_reactions_count} likes </div>
            )
          }
        </div>
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.body_html }}
          className="post"
        />
      </div>
    </main>
  )
}