import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { Link } from "gatsby"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    min-h-screen90
    flex
    md:items-center
    my-16 md:my-32
`

const Container = tw.div `
    container
    mx-auto
    md:grid
    grid-cols-12
    gap-4
    min-h-screen80
`

const Major = tw.div `
    md:col-span-7
    md:border-r-2
    md:border-black
    h-auto
    flex
    items-end
`

const ImageBlock = tw.div `
    w-auto
    md:pr-4
    md:h-lg
    overflow-hidden
`

const Minor = tw.div `
    md:col-span-5
`

const Title = tw.div `
    text-5xl md:text-8xl
    font-title
    font-bold
    tracking-tight
    leading-extra-tight
    mb-6 md:mb-12
    uppercase
    mt-4 md:mt-0
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

const MoreLink = tw.div `
    font-sans
    uppercase
    tracking-widest
    text-lg
    hover:underline
`

export default function HomeProp ( {data} ) {

    return (
        
        <Wrapper>

            <Container>

            <Major>
                <ImageBlock>
                    <img src={data.proposition_image.url} alt={''}></img>
                </ImageBlock>
            </Major>

            <Minor>
                <Title>
                    <RichText render={data.proposition_heading} />
                </Title> 

                <Body>
                    <RichText render={data.proposition_copy} />
                </Body>  

                <MoreLink>
                    <Link to={`/about/`}>Learn More &rarr;</Link>   
                </MoreLink>

            </Minor>    

            </Container>

        </Wrapper>

    )

}
