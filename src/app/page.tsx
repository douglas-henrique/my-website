import ProfileHeader from './components/ProfileHeader'
import PostsList from './components/PostsList'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center md:p-10 `} >
      <ProfileHeader />
      {/* @ts-expect-error Async Server Component */}
      <PostsList />
    </main>
  )
}
