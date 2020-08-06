import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'



const Wrapper = tw.div `
    bg-blue
    py-12 md:py-24
    flex
    items-center
    md:min-h-screen90
    w-full
    md:my-16
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
    odd:font-semibold
    mr-4 md:mr-4
`

const Bullet = tw.span `
    font-bold
    ml-2
`

export default function AboutExperience ( {data} ) {

    const lines = data.map(function(line, i){

        if (i + 1  < data.length) {

        return (
            <>
            <Line>
                {RichText.asText(line.text)}  <Bullet>&bull;</Bullet>
            </Line>
            </>
        ) 
        } else {

            return (
            <>
            <Line>
                {RichText.asText(line.text)}
            </Line>
            </>
            )

        }

    })

    return (
    
        <Wrapper>

            <Container>
                <Line><strong>Recently we…</strong></Line>
                {lines}
            </Container>

        </Wrapper>

    )

}