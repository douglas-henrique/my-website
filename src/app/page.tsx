import ProfileHeader from './components/ProfileHeader'
import PostsList from './components/PostsList'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center w-10/12 xl:w-8/12 2xl:w-7/12 pb-5`} >
      <ProfileHeader />
      {/* @ts-expect-error Async Server Component */}
      <PostsList />
    </main>
  )
}
