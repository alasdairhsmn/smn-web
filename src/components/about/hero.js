import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"

const Wrapper = tw.div `
    md:min-h-screen70
    mt-12 md:mt-0
    mb-12 md:mb-24
`

const Image = tw.div `
    max-h-screen70
    w-full
    bg-yellow
    overflow-hidden
`

const Container = tw.div `
    container
    mx-auto
    w-7/12
`

const Major = tw.div `
    mt-4
`

const Title = tw.div `
    text-10xl
    font-title
    font-bold
    tracking-tight
    uppercase
`

const Minor = tw.div `

`

const Body = tw.div `
    font-sans
    mt-8
    text-3xl md:text-4xl
    leading-snug
    font-normal
`


export default function AboutHero ( {title, sub} ) {

    return (

        <Wrapper>

        <Image>
            <img src={'./images/change.jpg'}></img>
        </Image>

        <Container>

            <Major>
                <Title>{title}</Title>
            </Major>

            <Minor>
                <Body>{sub}</Body>
            </Minor>

        </Container>

        </Wrapper>

    )

}
