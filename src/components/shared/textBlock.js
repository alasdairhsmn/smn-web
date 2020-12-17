import tw from "twin.macro"
import React from "react"

const Block = tw.div`
    bg-darkblue
    w-full
    min-h-screen60 md:min-h-screen70
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

const yellowBackground = tw`
  bg-lightyellow
  text-black
`

export default function TextBlock({ children, yellow = false }) {

  return (
    <Block css={[yellow && yellowBackground]}>
      <Container>
        <Text>
          {children}
        </Text>
      </Container>
    </Block>
  );
}