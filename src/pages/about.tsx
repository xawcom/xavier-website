import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Xavier" desc="Hi. I'm Xavier! You can visit my Facebook Page to see more of my photos." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Xavier!</h1>
        <p>
          You can visit my Facebook <a href="https://www.facebook.com/xavierwhitephotography">Page</a>
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
