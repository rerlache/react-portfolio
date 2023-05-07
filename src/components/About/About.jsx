import React from 'react'
import Timeline from './Timeline'
import Contact from './Contact'
import { AboutSection } from '../../styles/AboutStyles'

export default function About() {
  return (
    <AboutSection>
        <Timeline />
        <Contact />
    </AboutSection>
  )
}
