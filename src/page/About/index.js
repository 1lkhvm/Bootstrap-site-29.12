import React from 'react'
import AboutSection1 from '../../components/AboutComponents/AboutSection1'
import AboutSection2Card from '../../components/AboutComponents/AboutSection2Card'
import AboutSection3Our from '../../components/AboutComponents/AboutSection3Our'
import FooterComponents from '../../components/FooterComponents'
import NavbarComponents from '../../components/NavbarComponents'

function About() {
  return (
    <>
    <NavbarComponents></NavbarComponents>
    <AboutSection1></AboutSection1>
    <AboutSection2Card></AboutSection2Card>
    <AboutSection3Our></AboutSection3Our>
    <FooterComponents></FooterComponents>
    </>
  )
}

export default About