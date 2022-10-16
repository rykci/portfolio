import type { NextPage } from 'next'
import Head from 'next/head'
import { SocialIcon } from 'react-social-icons'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ricky Yuen Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <section>
          <nav className="px-10 flex justify-between py-6">
            <h1 className="text-xl">Ricky Yuen</h1>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="text-center">
            <h2 className="text-5xl font-medium py-2">Ricky Yuen</h2>
            <h3 className="text-2xl py-2">Software Developer</h3>
            <div className="flex justify-center gap-x-5 py-6">
              <SocialIcon url="https://www.facebook.com/RYlentless/" />
              <SocialIcon url="https://www.linkedin.com/in/yuenricky/" />
              <SocialIcon url="https://github.com/rykci" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
