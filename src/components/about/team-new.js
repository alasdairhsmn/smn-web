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
    grid-cols-2 md:grid-cols-6
    divide-x 
    divide-white
    font-sans
    text-lg md:text-xl
    font-light
    leading-tight
    text-white
`

const Experience = tw.div `
    col-span-1
    px-6
    py-1
    flex
    flex-col-reverse md:flex-col
    text-white
`

const ImageBlock = tw.div `
    h-auto
    w-full
    mb-2 md:mb-0
`

const Line = tw.div `
    mb-8 md:mb-16
    font-title
    font-bold
    uppercase
    text-lg md:text-2xl
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
    text-4xl
    text-white
`

const Role = tw.div `
    font-light
`

const Body = tw.div `
    font-sans
    font-light
    text-base md:text-lg
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
                <img src={person.team_member.image.url} />
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