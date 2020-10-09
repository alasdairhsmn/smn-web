import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'


const Wrapper = tw.div `
    bg-black
    pt-6 md:pt-12
    pb-8 md:pb-20
    w-full
`

const Container = tw.div `
    mx-auto
    w-full
    pr-4 md:pr-12
    pl-4 md:pl-6
    grid
    grid-cols-2 md:grid-cols-12
    gap-6
    md:divide-x 
    divide-white
    font-sans
    text-lg md:text-xl
    font-light
    leading-tight
    text-white
`

const Experience = tw.div `
    col-span-1 md:col-span-2
    py-1
    flex
    flex-col-reverse md:flex-col
    text-white
    md:pl-6
`

const ImageBlock = tw.div `
    h-auto
    w-full
    bg-white
    mb-2 md:mb-0
`

const Line = tw.div `
    mb-2 md:mb-16
    font-title
    font-normal
    uppercase
    text-base md:text-2xl
    leading-none
    flex-1
`

const Subhead = tw.div `
    font-bold
`

const Title = tw.div `
    mx-auto
    font-title
    font-normal
    uppercase
    px-4 md:px-12
    mb-4 md:mb-12
    text-2xl md:text-4xl
    text-white
`

export default function AboutExperience ( {data} ) {

    const lines = data.map(function(line, i){
            return (

            <Experience>

                <Line>
                <Subhead>{RichText.asText(line.section_title)}</Subhead>
                    {RichText.asText(line.text)}
                    
                </Line>

                <ImageBlock>
                    <img src={line.image.url} />
                </ImageBlock>

            </Experience>

            )
    })

    return (
    
        <Wrapper>

            <Title>
                Recently we have...
            </Title>

            <Container>

                {lines}

            </Container>

        </Wrapper>

    )

}