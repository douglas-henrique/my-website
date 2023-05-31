import ProfileHeader from './components/ProfileHeader'
import PostsList from './components/PostsList'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Douglas Yoshi',
  description: 'Welcome to my digital world where I share my knowledges helping people to build beautiful web applications. 🌏',
  keywords: ["React", "ReactJS", "NodeJS", "Typescript", "MySQL", "Postgres", "graphQL", "React Native", "Frontend", "Frontend developer", "Brazil", "Fullstack Developer"],
  authors: [{ name: 'Douglas Yoshi' }],
  creator: "Douglas Yoshi",
  publisher: "Douglas Yoshi"
};


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-5`} >
      <ProfileHeader />
      {/* @ts-expect-error Async Server Component */}
      <PostsList />
    </main>
  )
}
