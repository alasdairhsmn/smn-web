import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { Link } from "gatsby"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    flex
    items-center
    mt-0 md:mt-24
    mb-12 md:mb-32
    bg-lightyellow md:bg-white
    py-12 md:py-0
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
    grid-cols-3 md:grid-cols-3
    md:w-5/6
    gap-0
    mx-auto
`
const GalleryItem = tw.div `
    flex
    items-center
    m-4 md:m-8
`

const ItemImage = tw.img `

`

const Minor = tw.div `
    md:col-span-5
    mb-6 md:mb-0
`

const Title = tw.div `
    text-4xl md:text-8xl
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
    text-xl
    leading-tight
    md:pr-12
    font-normal
    `}
    p     {
            margin-bottom: 1em;
            }
`

const MoreLink = tw.div `
    font-sans
    uppercase
    tracking-widest
    text-lg
    hover:underline
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

            <MoreLink>
                <Link to={`/changework/`}>learn more &rarr;</Link>   
            </MoreLink>

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
