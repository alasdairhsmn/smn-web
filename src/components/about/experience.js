import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'



const Wrapper = tw.div `
    bg-black
    py-16 md:py-32
    w-full
    md:my-16
`

const Container = tw.div `
    w-full
    flex-none
    grid
    grid-cols-5
    font-sans
    text-xl md:text-3xl
    font-normal
    leading-tight
    text-white
`

const Experience = tw.div `
    col-span-1
`

const Line = tw.div `
    odd:font-semibold
    mr-4 md:mr-4
`

const Title = tw.div `
    col-span-5
`

export default function AboutExperience ( {data} ) {

    const lines = data.map(function(line, i){
            return (

            <Experience>
                <Line>
                    {RichText.asText(line.text)}
                </Line>
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