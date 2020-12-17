import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"
import Fade from 'react-reveal/Fade'

const Wrapper = tw.div`
    bg-lightgrey
    z-10
    relative
`

const Content = tw.div`
  container
  mx-auto
  flex
  justify-between
`

const PolaroidImage = styled.div`

  ${tw`   
    bg-white
    shadow-2xl
  `}

  padding-bottom: 30%;
  width: 30%;

  &:nth-of-type(1) {
    transform: rotate(-5deg) translateX(-10%);
  }
  &:nth-of-type(2) {
    transform: rotate(3deg) translate(-10%, -10%) scale(1.1);
  }
  &:nth-of-type(3) {
    transform: rotate(80deg) translate(25%, 0%);
    z-index: 1;
  }
  &:nth-of-type(4) {
    transform: rotate(3deg) translate(10%, -10%) scale(1.15);
  }
`

export default function AboutPolaroids() {

    return (

        <Wrapper>

            <Fade delay={300}>
                <Content>
                    <PolaroidImage />
                    <PolaroidImage />
                    <PolaroidImage />
                    <PolaroidImage />
                </Content>
            </Fade>

        </Wrapper>

    )

}
