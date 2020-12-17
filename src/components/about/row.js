import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'

const Wrapper = tw.section`
  bg-lightgrey
`

const Content = tw.div`
  container mx-auto
  flex flex-col items-center justify-center 
  md:flex-row md:justify-between
  py-20 lg:py-28
  min-h-screen50 md:min-h-screen60
`

const ImageContainer = tw.div`
  md:w-1/2
  flex-none
  flex items-center justify-center
  mb-12 md:mb-0
`

const TextContainer = tw.div`
  md:w-1/2
`

const Heading = tw.h2`
  font-title
  uppercase
  font-bold
  text-5xl lg:text-7xl
  mb-2 md:mb-10
`

const Paragraph = tw.div`
  text-2xl md:text-3xl
  font-normal
  space-y-8
`

const yellowBackground = tw`
    bg-lightyellow
`

const reverseOrder = tw`
    lg:flex-row-reverse
`

export default function AboutRow({ title, children, yellow = false, reverse = false }) {
    return (
        <Wrapper css={[yellow && yellowBackground]}>
            <Fade delay={300}>
                <Content css={[reverse && reverseOrder]}>
                    <ImageContainer>
                        <div css={tw`bg-purple h-64 w-64 rounded-full`}></div>
                    </ImageContainer>
                    <TextContainer>
                        <Heading>{title}</Heading>
                        <Paragraph>{children}</Paragraph>
                    </TextContainer>
                </Content>
            </Fade>
        </Wrapper>

    )
}