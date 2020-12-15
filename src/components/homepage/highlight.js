import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const Hero = tw.div`
    relative
    container
    mx-auto
    mt-12
`

const ImageWrap = tw.div`
    overflow-hidden
    h-full
    mb-3
`

const BgImage = tw.img` 
    h-sm md:h-auto
    w-full
`

const Wrapper = tw.div`
    w-full
    mx-auto
`

const Info = tw.div`
    w-full
    font-sans
    max-w-xl
`

const Title = tw.span`
    font-title
    text-2xl md:text-3xl
    leading-normal
    uppercase
    font-bold
    mb-2
    text-purple
`

const Subhead = tw.span`
    text-2xl md:text-3xl
    leading-10
    tracking-tight
    font-normal
`

const RowTitle = tw.div`
    mb-4 md:mb-8
    flex
    pb-4
    items-center
`

const RowTitleMain = tw.div`
    font-title
    font-bold
    text-4xl md:text-7xl
    leading-normal
    flex-grow
    uppercase
`

const HoverWrap = tw.div`
    hover:opacity-75 
`


export default function HomeHighlight({ data }) {

    return (

        <Hero>

            <RowTitle>

                <RowTitleMain>Projects</RowTitleMain>

            </RowTitle>

            <Link to={`/changework/${data.project._meta.uid}`}>

                <HoverWrap>

                    <ImageWrap>
                        <BgImage src={data.project.lead_image.url} />
                    </ImageWrap>


                    <Wrapper>
                        <Info>
                            <Title>
                                {RichText.asText(data.project.title)}
                            </Title>
                            <Subhead>
                                <span>&thinsp;—&thinsp;</span>
                                {RichText.asText(data.project.challenge)}
                            </Subhead>
                        </Info>
                    </Wrapper>
                </HoverWrap>

            </Link>
        </Hero>

    )

}
