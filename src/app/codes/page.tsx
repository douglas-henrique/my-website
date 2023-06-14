import CardSpotlight from '@/components/CardSpotlight'
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gist Codes | Douglas Yoshi - Fullstack developer, frontend specialist",
  description: "Here you can fine some usable examples to make your day easier",
  metadataBase: new URL("https://www.dougdev.com.br/codes"),
  openGraph: {
    images: ['/avatar.png'],
    description: "Here you can fine some usable examples to make your day easier",
    type: 'website',
    url: 'https://www.dougdev.com.br/codes',
    title: "Gist Codes | Douglas Yoshi - Fullstack developer, frontend specialist",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gist Codes | Douglas Yoshi - Fullstack developer, frontend specialist",
    images: ['/avatar.png'],
    description: "Here you can fine some usable examples to make your day easier",
  }
};

interface GistProps {
  id: number
  files: {
    [key: string]: {
      filename: string
      language: string
    }
  }
  description: string
}



const getGists = async () => {
  const request = await fetch('https://api.github.com/users/douglas-henrique/gists', { method: 'GET' })

  if (!request.ok) {
    throw new Error('Failed to fetch Posts');
  }

  return request.json();
}

export default async function Codes() {
  const gists: GistProps[] = await getGists()

  return (
    <section className="p-10 w-7/12 max-[600px]:w-full">
      <h3 className="font-bold text-4xl">My codes on Gist 🧑🏻‍💻</h3>
      <p className="my-2">Here you can find some usable examples to make your day easier </p>
      <div className="grid grid-cols-2 gap-4 mt-5 max-[600px]:grid-cols-1">
        {gists.map(element => {
          const file = Object.values(element.files)[0]
          return (
            <Link href={`/codes/${element.id}`} key={element.id}>
              <CardSpotlight>
                <div className='my-2'>🧑🏻‍💻 {file.language}</div>
                <h1 className="font-bold text-xl"> {file.filename}</h1>
                <p className="mt-2">{element.description ? element.description : 'No description about the code'}</p>
              </CardSpotlight>
            </Link>
          )
        }
        )}
      </div>
    </section>
  )
}