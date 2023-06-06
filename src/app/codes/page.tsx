import CardSpotlight from '@/components/CardSpotlight'
import Link from 'next/link'

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
    <div className="p-10">
      <h3 className="font-bold text-xl">My codes on Gist 🧑🏻‍💻</h3>
      <p className="my-2">Here you can fine some usable examples to make your day easier </p>
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
    </div>
  )
}