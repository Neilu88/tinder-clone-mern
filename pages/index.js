import Head from "next/head"
import Image from "next/image"
import Buttons from "../components/Buttons"
import Cards from "../components/Cards"
import Header from "../components/Header"

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Tinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Cards />
      <Buttons />
    </div>
  )
}

export default Home
