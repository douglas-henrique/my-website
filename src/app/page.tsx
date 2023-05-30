import ProfileHeader from './components/ProfileHeader'
import { Montserrat } from 'next/font/google'
import PostsList from './components/PostsList'
const mont = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center md:p-10 ${mont.className} `} >
      <ProfileHeader />
      {/* @ts-expect-error Async Server Component */}
      <PostsList />
    </main>
  )
}
