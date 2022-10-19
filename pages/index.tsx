import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ProfileCard from '../components/ProfileCard'
import ProjectCard from '../components/ProjectCard'
import ContactCard from '../components/ContactCard'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ricky Yuen Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-green-800 to-cyan-300">
        <section className="text-white flex flex-col gap-y-6 py-6">
          <Navbar />
          <ProfileCard />
          <ProjectCard />
          <ContactCard />
        </section>
      </main>
    </div>
  )
}

export default Home
