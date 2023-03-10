import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'



export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide' >
      <Head>
        <title>Insta Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header></Header>
      {/* feed */}
      <Feed></Feed>
      {/* modal */}
      <Modal></Modal>
    </div>
  )
}
