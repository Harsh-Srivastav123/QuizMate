import React from 'react'
import Navbar from "./../../components/homeComponents/navbar/Navbar"
import Banner from "./../../components/homeComponents/banner/Banner"
import Box from "./../../components/homeComponents/box/Box"
import PracticeCorner from "./../../components/homeComponents/practicecorner/PracticeCorner"
import SessionCorner from "./../../components/homeComponents/sessioncorner/SessionCorner"
import Features from "./../../components/homeComponents/features/Features"
import Footer from '../../components/homeComponents/footer/Footer'




const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Box></Box>
      <PracticeCorner></PracticeCorner>
      <SessionCorner></SessionCorner>
      <Features></Features>
      <Footer/>
     
    </div>
  )
}

export default Home
