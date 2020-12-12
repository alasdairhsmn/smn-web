import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import HomeAnimation from "./animation"
import { Link } from "gatsby"

const Hero = tw.div`
    relative
    container
    mx-auto
    mt-12
`

const ImageWrap = tw.div `
    overflow-hidden
    h-full
`

const BgImage =  tw.img ` 
    h-sm md:h-auto
    w-full
`

const Wrapper = tw.div `
    w-full
    mx-auto

`

const Info = tw.div `
    w-full
    text-black
    font-sans
`

const Title = tw.div `
    font-title
    text-2xl md:text-4xl
    leading-normal
    uppercase
    font-bold
    mb-2
`

const Subhead = tw.div `
    text-xl md:text-2xl
    leading-tight
    text-midgrey
`

const RowTitle = tw.div `
    mb-4 md:mb-8
    flex
    pb-4
    items-center
`

const RowTitleMain = tw.div `
    font-title
    font-semibold
    text-2xl md:text-4xl
    leading-normal
    flex-grow
`

const RowTitleLink = tw.div `
    pt-2 md:pt-4
    text-lg 
    md:text-xl
    leading-normal
    hover:underline
`

const HoverWrap = tw.div `
    hover:opacity-75 
`


export default function HomeHighlight ( {data} ) {

    return (

    <Hero>

    <RowTitle>

        <RowTitleMain>Changework Projects</RowTitleMain>
            <RowTitleLink>
                <Link to={`/changework`}>See all &rarr;</Link>     
        </RowTitleLink>

    </RowTitle>

    <Link to={`/changework/${data.project._meta.uid}`}>
        
        <HoverWrap>

        <ImageWrap>
            <BgImage src={data.project.lead_image.url}></BgImage>
        </ImageWrap>


        <Wrapper>
            <Info>
                <Title>
                    <RichText render={data.project.title} />
                </Title>
                <Subhead>
                    <RichText render={data.project.challenge} />
                </Subhead>
            </Info>
        </Wrapper>
        </HoverWrap>

        </Link>
    </Hero>

    )

}
