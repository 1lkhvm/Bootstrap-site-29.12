import React from 'react'
import FooterComponents from '../../components/FooterComponents'
import HomeSection1 from '../../components/HomeComponents/HomeSection1'
import HomesSection2Abetter from '../../components/HomeComponents/HomeSection2Abetter'
import HomeSection3Working from '../../components/HomeComponents/HomeSection3Working'
import HomeSection4Card from '../../components/HomeComponents/HomeSection4Card'
import NavbarComponents from '../../components/NavbarComponents'

function Home() {
  return (
    <>
    <NavbarComponents></NavbarComponents>
    <HomeSection1></HomeSection1>
    <HomesSection2Abetter></HomesSection2Abetter>
    <HomeSection3Working></HomeSection3Working>
    <HomeSection4Card></HomeSection4Card>
    <FooterComponents></FooterComponents>
    </>
  )
}

export default Home