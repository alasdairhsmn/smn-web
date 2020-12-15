import tw from "twin.macro"
import React from "react"

const Container = tw.div`
  container
  mx-auto
  my-12 lg:my-20
`

const Title = tw.h1`
  font-title
  text-5xl md:text-7xl lg:text-8xl
  font-bold
  lg:w-1/2
  uppercase
  leading-none
  mb-4 md:mb-6 lg:mb-8
`

const Text = tw.p`
  text-lg md:text-2xl lg:text-3xl
  md:w-2/3 lg:w-1/2
`

export default function Intro() {

  return (
    <Container>
      <Title>CHANGEWORK PROJECTS</Title>
      <Text>We help leading organisations tackle strategic challenges and thrive in a changing world </Text>
    </Container>
  )
}