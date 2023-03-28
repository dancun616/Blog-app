import Link from 'next/link'

export default function Home() {
  return (
    <div className='home'>
      <nav>
        <Link href="/login">Login</Link>
      </nav>
      <h1>Welcome to the best task creating app ever!!!Kindly log in to get access to this apps amazing
        features.
      </h1>
    </div>
  )
}
