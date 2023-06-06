import Link from "next/link"
import CardSpotlight from "./CardSpotlight"

interface RepoProps {
  id: number
  name: string
  html_url: string
  topics: Array<string>
  description: string
  is_template: string
}

export default function GithubRepos({ repos }: { repos: RepoProps[] }) {
  return (
    <div className="p-10">
      <h3 className="font-bold text-xl">My recent projects on Github</h3>
      <div className="grid grid-cols-2 gap-4 mt-5 max-[600px]:grid-cols-1">
        {repos.slice(0, 5).map(element => (
          <Link href={element.html_url} key={element.id}>
            <CardSpotlight>
              <div>🧑🏻‍💻</div>
              <h1 className="font-bold text-xl"> {element.name}</h1>
              <p className="mt-5">{element.description ?? 'No description about the project'}</p>
              <div className="flex flex-row h-auto py-2 gap-3 mt-2">
                {
                  element.topics.slice(0, 3).map(element => <label className="text-red-800 font-medium" key={element}>#{element}</label>)
                }
              </div>
            </CardSpotlight>
          </Link>
        ))}
      </div>
    </div>
  )
}