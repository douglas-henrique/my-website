import CodeBlock from "@/components/CodeBlock"
import Link from 'next/link'
import { Metadata } from "next"

type FileProps = {
  filename: string
  language: string
  content: string
}

interface GistProps {
  id: number
  html_url: string
  files: {
    [key: string]: FileProps
  }
  description: string
}

const getGist = async (id: string) => {
  const request = await fetch(`https://api.github.com/gists/${id}`, { method: 'GET' })

  if (!request.ok) {
    throw new Error('Failed to fetch gists');
  }

  return request.json();
}

export async function generateMetadata(
  { params }: { params: { id: string } }): Promise<Metadata> {
  const gist: GistProps = await getGist(params.id);
  const file = Object.values(gist.files)[0]

  return {
    title: file.filename,
    metadataBase: new URL("https://www.dougdev.com.br"),
    description: gist.description,
    authors: [{ name: 'Douglas Yoshi' }],
    creator: "Douglas Yoshi",
    publisher: "Douglas Yoshi",
    openGraph: {
      description: gist.description,
      type: 'article',
      url: 'https://www.dougdev.com.br/codes/' + params.id,
      title: file.filename + ' - Douglas Yoshi',
    },
    twitter: {
      card: 'summary_large_image',
      title: file.filename + ' - Douglas Yoshi',
      description: gist.description,
    }
  };
}

export default async function Code({ params }: { params: { id: string } }) {
  const gist: GistProps = await getGist(params.id)
  const file = Object.values(gist.files)[0]

  return (
    <div className="p-10 w-8/12 max-[600px]:w-full">
      <h3 className="font-bold text-xl">{file.filename} - Gist Code</h3>
      <p className="my-5">{gist.description}</p>
      <CodeBlock text={file.content} language={file.language} />
      <Link href={gist.html_url} className="py-5 text-red-700">See code on github 👀</Link>
    </div>
  )
}