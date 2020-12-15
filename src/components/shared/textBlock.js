import tw from "twin.macro"
import React from "react"

const Block = tw.div`
    w-full
    bg-darkblue
    min-h-screen80 md:min-h-screen
    flex
    items-center
    justify-center
    text-white
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    leading-tight md:leading-none
    font-normal
    
`

const Container = tw.div`
  container
  mx-auto
`

const Text = tw.div`
  max-w-xl
  mx-auto
  space-y-8 lg:space-y-16
  py-12
`

export default function TextBlock() {

  return (
    <Block>
      <Container>
        <Text>
          <p>We specialise in participatory approaches to strategy and innovation.</p>

          <p>We like ambitious clients, big challenges and messy problems.</p>
        </Text>
      </Container>
    </Block>
  );
}