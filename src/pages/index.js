import Link from 'next/link'

export default function Home() {
  return (
    <div className='home'>
      <h1>Blog-post</h1>
      <nav>
        <Link href="/login">Login</Link>
      </nav>
    </div>
  )
}
