import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    bg-black
    py-12 md:py-24
    w-full
    md:my-16
`

const Container = tw.div `
    w-full
    p-12
    flex-none
    grid
    grid-cols-4
    gap-4
    font-sans
    text-lg md:text-xl
    font-light
    leading-tight
    text-white
`

const Experience = tw.div `
    col-span-1
    border-r-2
    border-white
`

const ImageBlock = tw.div `
    h-32
    w-full
    bg-white
`

const Line = tw.div `
    mb-4
`

const Title = tw.div `
    col-span-6
    font-title
    font-bold
    uppercase
    mb-6
    text-5xl
`

export default function AboutExperience ( {data} ) {

    const lines = data.map(function(line, i){
            return (

            <Experience>

                <Line>
                    {RichText.asText(line.text)}
                </Line>

                <ImageBlock />

            </Experience>

            )
    })

    return (
    
        <Wrapper>

            <Container>
                <Title>Recently we…</Title>
                {lines}
            </Container>

        </Wrapper>

    )

}