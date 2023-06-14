import HomeGreeting from '@/components/HomeGreeting';
import GithubRepos from '@/components/GithubRepos';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Douglas Yoshi | Fullstack developer, frontend specialist",
  description: "Welcome to my digital world where I share my knowledges helping people to build beautiful web applications. 🌏",
  metadataBase: new URL("https://www.dougdev.com.br"),
  openGraph: {
    images: ['/avatar.png'],
    description: "Welcome to my digital world where I share my knowledges helping people to build beautiful web applications. 🌏",
    type: 'website',
    url: 'https://www.dougdev.com.br',
    title: "Douglas Yoshi | Fullstack developer, frontend specialist",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Douglas Yoshi | Fullstack developer, frontend specialist",
    images: ['/avatar.png'],
    description: "Welcome to my digital world where I share my knowledges helping people to build beautiful web applications. 🌏",
  }
};

const getRepos = async () => {
  const request = await fetch('https://api.github.com/users/douglas-henrique/repos', { method: 'GET' })

  if (!request.ok) {
    throw new Error('Failed to fetch Posts');
  }

  return request.json();
}

export default async function Home() {
  const repos = await getRepos();
  
  return <HomeGreeting />
}
