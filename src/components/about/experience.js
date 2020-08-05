import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'


const Wrapper = tw.div `
    bg-blue
    py-12
    flex
    items-center
    min-h-screen90
    w-full
    my-16
`

const Container = tw.div `
    container
    mx-auto
    text-white
    font-title
    text-6xl
    font-bold
    leading-tight
`

const Line = tw.span `
    inline
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
                <Line>Recently we have…</Line>
                <p>
                {lines}
                </p>
            </Container>

        </Wrapper>

    )

}