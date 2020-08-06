import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"

import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    w-auto
    mb-16
`

const Container = tw.div `
    container
    mx-auto
    grid
    grid-cols-12
    gap-4
    w-full
`

const ImageBlock = tw.div `
    col-span-12
    w-full
    bg-white
    overflow-hidden
    max-h-screen80
`

const ItemImage = tw.img `
    h-full
    w-full
    object-cover
`

const TextBlock = tw.div `
    col-span-7
`

const Title = tw.div `
    text-xl md:text-xl 
    font-semibold 
    mb-2
`

const Subhead = tw.div `
    text-lg md:text-xl 
    font-sans 
    tracking-wide
    leading-tight
    mb-2
    text-midgrey
`

const MoreLink = tw.div `
    font-sans
    uppercase
    tracking-widest
    hover:underline
    text-midgrey
`



export default function BlogIndexMain ( {data} ) {

    return (
    
    <Wrapper>

    <Link to={`/blog/${data.node._meta.uid}`}>
        <Container>

        <ImageBlock>
            <ItemImage src={data.node.lead_image.url}></ItemImage>
        </ImageBlock>

        <TextBlock>

            <Title>
                <RichText render={data.node.title} />
            </Title>

            <Subhead>
                <RichText render={data.node.subhead} />
            </Subhead>

            <MoreLink>
                <Link to={`/blog/${data.node._meta.uid}`}>Read More &rarr;</Link>   
            </MoreLink>

        </TextBlock>

        </Container>
    </Link>    

    </Wrapper>

    )

}