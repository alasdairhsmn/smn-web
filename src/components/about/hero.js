import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { RichText } from 'prismic-reactjs'


const Container = tw.div `
    container
    mx-auto
    w-full
    h-auto
    md:grid
    grid-cols-12
    gap-4
    mb-12 md:mb-24
    mt-8
    md:min-h-screen80
`

const Major = tw.div `
    md:border-r-2
    border-black
    col-span-7
`

const Title = tw.div `
    text-8xl md:text-16xl
    font-title
    font-bold
    tracking-tight
    leading-extra-tight
    mb-10 md:mb-20
    uppercase
`

const Aligner = styled.span `
::before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    margin-bottom: -50px;
  }
`

const Minor = tw.div `
    col-span-5
    flex
    items-end
`

const Body = tw.div `
    font-sans
    text-3xl md:text-5xl
    leading-none
    md:pr-12
    font-normal
`


export default function AboutHero ( {title, sub} ) {

    return (

        <Container>

            <Major>
                <Title>
                    <Aligner>{title}</Aligner>
                </Title>
            </Major>

            <Minor>
                <Body>{sub}</Body>
            </Minor>

        </Container>

    )

}