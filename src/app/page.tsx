import HomeGreeting from '@/components/HomeGreeting';
import GithubRepos from '@/components/GithubRepos';

const getRepos = async () => {
  const request = await fetch('https://api.github.com/users/douglas-henrique/repos', { method: 'GET' })

  if (!request.ok) {
    throw new Error('Failed to fetch Posts');
  }

  return request.json();
}

export default async function Home() {
  const repos = await getRepos();
  return (
    <div className='w-8/12 max-[600px]:w-full'>
      <HomeGreeting />
      <GithubRepos repos={repos} />
    </div>
  )
}
