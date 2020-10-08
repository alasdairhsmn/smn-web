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
    w-full
    grid
    grid-cols-1 md:grid-cols-6
    md:divide-x 
    divide-white
    font-sans
    text-base md:text-xl
    font-light
    leading-tight
    text-white
`

const Experience = tw.div `
    col-span-1
    px-6
    md:py-1
    pb-12 md:pb-0
    flex
    items-center
    flex-row-reverse md:flex-col
    text-white
`

const ImageBlock = tw.div `
    h-auto
    w-1/2 md:w-full
    bg-white
`

const Line = tw.div `
    mx-2 md:mx-0
    mb-2 md:mb-16
    font-title
    font-normal md:font-bold
    uppercase
    text-xl md:text-2xl
    leading-none
    flex-1
`

const Title = tw.div `
    col-span-6
    font-title
    font-normal
    uppercase
    px-6
    mb-8
    text-2xl md:text-4xl
    text-white
`

export default function AboutExperience ( {data} ) {

    const lines = data.map(function(line, i){
            return (

            <Experience>

                <Line>
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