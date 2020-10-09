import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"


const Container = tw.div `
    container
    mx-auto
    w-full
    h-auto
    md:grid
    grid-cols-12
    gap-4
    py-16 md:py-32
    md:min-h-screen50
`

const Major = tw.div `
    md:border-r-2
    border-black
    col-span-7
`

const Title = tw.div `
    text-5xl md:text-14xl
    font-title
    font-bold
    tracking-tight
    leading-extra-tight
    mb-8 md:mb-20
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
    text-2xl md:text-4xl
    leading-none
    md:pr-12
    font-normal
`


export default function PageTitle ( {title, sub} ) {

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