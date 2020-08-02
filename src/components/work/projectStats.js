import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Block = tw.div `
    py-16 md:py-24
    md:min-h-screen80
    bg-orange
`

const Container = tw.div `
    container
    mx-auto
`

const TextBlock = tw.div `
    md:w-1/2
    text-white
    mb-16
`

const Title = tw.div `
    text-2xl md:text-4xl 
    font-display 
    font-extrabold 
    mb-2
`

const Subhead = tw.div `
    text-lg md:text-xl 
    font-sans 
    font-light 
`

const Wrapper = tw.div `
    container 
    md:mx-auto
    md:flex
    md:items-center
    md:space-x-32
`

const StatBlock = tw.div `
    w-full
    flex-grow
    text-center
    text-white
    mb-6 md:mb-12
`

const StatNumber = tw.div `
    font-display
    font-extrabold
    text-6xl md:text-12xl
    leading-none
    mb-2
`

const StatCaption = tw.div `
    font-sans
    font-light
    text-xl
`



export default function ProjectStats ( {data} ) {


    const stats = data.fields.map(function(stat){

        return (
            <StatBlock>

               <StatNumber>
                    <RichText render={stat.stat_number} />
               </StatNumber>

               <StatCaption>
                   <RichText render={stat.stat_caption} />
                </StatCaption>

           </StatBlock>
        )

    })

    return (

    <Block>

    <Container>  

    <TextBlock>
        <Title>
            <RichText render={data.primary.section_title} />
        </Title>

        <Subhead>
            <RichText render={data.primary.section_summary} />
        </Subhead>
    </TextBlock>

    </Container>  

        <Wrapper>

           {stats}

        </Wrapper>

    </Block>

    )

}