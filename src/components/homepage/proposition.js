import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { Link } from "gatsby"
import { RichText } from 'prismic-reactjs'

import workshop from "../../images/sample/workshop.jpg"


const Wrapper = tw.div `
    min-h-screen90
    flex
    items-center
    my-32
`

const Container = tw.div `
    container
    mx-auto
    grid
    grid-cols-12
    gap-4
    min-h-screen80
`

const Major = tw.div `
    col-span-7
    border-r-2
    border-black
    h-auto
    flex
    items-end
`

const ImageBlock = tw.div `
    w-auto
    pr-4
    h-lg
    overflow-hidden
`

const Minor = tw.div `
    col-span-5
`

const Title = tw.div `
    text-8xl
    font-title
    font-bold
    tracking-tight
    leading-extra-tight
    mb-12
    uppercase
`

const Body = styled.div `
    ${tw`   
    font-sans
    text-2xl
    leading-tight
    pr-12
    font-normal
    `}
    p     {
            margin-bottom: 1em;
            }
`

export default function HomeProp ( {data} ) {

    return (
        
        <Wrapper>

            <Container>

            <Major>
                <ImageBlock>
                    <img src={data.proposition_image.url}></img>
                </ImageBlock>
            </Major>

            <Minor>
                <Title>
                    <RichText render={data.proposition_heading} />
                </Title> 

                <Body>
                    <RichText render={data.proposition_copy} />
                </Body>  

                <Link>Learn more about us</Link>

            </Minor>    

            </Container>

        </Wrapper>

    )

}