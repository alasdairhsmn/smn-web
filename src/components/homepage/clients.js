import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { Link } from "gatsby"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    min-h-screen90
    flex
    items-center
    my-16
`

const Container = tw.div `
    container
    mx-auto
    md:grid
    grid-cols-12
    gap-4
`

const Major = tw.div `
    col-span-7
    md:border-l-2
    border-black
    h-auto
    flex
    items-center
`

const Gallery = tw.div `
    grid
    grid-cols-2 md:grid-cols-3
    md:w-5/6
    gap-0
    mx-auto
`
const GalleryItem = tw.div `
    flex
    items-center
    m-8
`

const ItemImage = tw.img `

`

const Minor = tw.div `
    col-span-5
`

const Title = tw.div `
    text-5xl md:text-8xl
    font-title
    font-bold
    tracking-tight
    leading-extra-tight
    mb-6 md:mb-12
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

export default function HomeClients ( {data} ) {

    const logos = data.client_logos.map(function(logo){

        return (
            <GalleryItem>
                <ItemImage src={logo.logo_image.url} />
            </GalleryItem>
        )

    })

    return (
        
    <Wrapper>

        <Container>

        <Minor>
            <Title>
                <RichText render={data.clients_heading} />
            </Title> 

            <Body>
                <RichText render={data.clients_copy} />
            </Body>  

            <Link>Learn more about us</Link>

        </Minor>   

        
        <Major>

            <Gallery>

                {logos}

            </Gallery>
            
        </Major> 


        </Container>

    </Wrapper>

    )

}