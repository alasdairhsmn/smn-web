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
    mb-2 md:mb-0
`

const Line = tw.div `
    mb-4 md:mb-16
    font-title
    font-bold
    uppercase
    text-lg md:text-2xl
    leading-none
    flex-1
`

const Title = tw.div `
    mx-auto
    font-title
    font-normal
    uppercase
    px-4 md:px-12
    mb-4 md:mb-12
    text-2xl md:text-4xl
    leading-normal
    text-white
`

const Role = tw.div `
    font-light
`

const Body = tw.div `
    font-sans
    font-light
    text-base md:text-base
    leading-tight
    mt-4
    normal-case
`



export default function AboutTeamNew ( {data} ) {

    const team = data.map(function(person){
        return (

        <Experience>

            <Line>
                <RichText render={person.team_member.name} />
                
                <Role>
                    <RichText render={person.team_member.role} />
                </Role>

                <Body>
                    <RichText render={person.team_member.in_brief} />
                </Body>
            </Line>

            <ImageBlock>
                <img alt="" src={person.team_member.image.url} />
            </ImageBlock>


        </Experience>

        )
})

return (

    <Wrapper>

        <Title>
            Meet Our Team
        </Title>

        <Container>

            {team}

        </Container>

    </Wrapper>

)

}