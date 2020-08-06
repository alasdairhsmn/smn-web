import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'


const Wrapper = tw.div `
    bg-blue
    py-12
    flex
    items-center
    md:min-h-screen90
    w-full
    my-16
`

const Container = tw.div `
    container
    mx-auto
    text-white
    font-title
    text-3xl md:text-6xl
    font-normal
    leading-tight
`

const Line = tw.span `
    inline
    even:font-bold
    mr-4 md:mr-8
`

export default function AboutExperience ( {data} ) {

    const lines = data.map(function(line){

        return (
            <Line>
                {RichText.asText(line.text)}
            </Line>
        )

    })

    return (
    
        <Wrapper>

            <Container>
                <Line><strong>Recently we have…</strong></Line>
                <p>
                {lines}
                </p>
            </Container>

        </Wrapper>

    )

}