import { Header, Info, Project, Skills, AboutMe } from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>CongTu Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-white dark:bg-black relative'>
        <Header />
        <div className='dark:bg-zinc-900 bg-gray-200 overflow-auto w-screen pt-20 sm:px-10 px-2'>
          <div className='fixed left-0 top-[5rem] w-[25%] px-3 text-gray-800 dark:text-gray-100 space-y-3 overflow-hidden pb-32 xl:block hidden'>
            <Info />
            <AboutMe />
          </div>
          <div className='xl:w-[50%] xl:ml-[27%] lg:w-[65%] lg:mx-0 sm:w-[90%] w-full mx-auto'>
            <div className='w-full pb-5'>
              <Project />
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </>
  )
}
