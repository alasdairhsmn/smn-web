import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'

const Wrapper = tw.section`
  bg-lightyellow
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
  mb-2 md:mb-4
`

const Paragraph = tw.p`
  text-2xl md:text-3xl
  font-normal
`


export default function AboutRow() {

    return (

        <Wrapper>
            <Fade delay={300}>
                <Content>
                    <ImageContainer>
                        <div css={tw` bg-purple h-64 w-64 rounded-full`}></div>
                    </ImageContainer>
                    <TextContainer>
                        <Heading>The Method</Heading>
                        <Paragraph>Our projects run on a methodology that breaks down messy problems into simple steps and tangible progress that everyone can get behind.</Paragraph>
                    </TextContainer>
                </Content>
            </Fade>
        </Wrapper>

    )
}