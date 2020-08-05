import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    my-24
    w-full
    min-h-screen80
    flex
    items-center
`

const Container = tw.div `
    container
    mx-auto
    w-full
    grid
    grid-cols-12
    gap-4
`

const Person = tw.div `
    col-span-2
    h-lg
    font-sans
    text-xl
    leading-tight
`

const Image = tw.img `
    object-cover
    w-full
    h-med
`

const Name = tw.div `
    font-title
    text-2xl
    font-semibold
    uppercase
    leading-extra-tight
    py-4
`

const Role = tw.div `
   font-bold
`

const Summary = tw.div `
`



export default function AboutTeam ( {data} ) {

    const team = data.map(function(person){

        return (
            <Person>

                <Image src={person.team_member.image.url}></Image>

                <Name>
                    <RichText render={person.team_member.name} />
                </Name>

                <Role>
                    <RichText render={person.team_member.role} />
                </Role>

                <RichText render={person.team_member.in_brief} />

            </Person>
        )

    })

    return (

    <Wrapper>
        <Container>

            {team}

        </Container>
    </Wrapper>    

    )

}