import styled from "@emotion/styled"
import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'

import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const WorkGrid = tw.div`
    md:grid 
    md:grid-cols-2 
    mb-32 lg:mb-60
    col-gap-12 
    container
    mx-auto
`

const Wrapper = styled.div`
    &:nth-of-type(3n) {
        grid-column: 1 / span 2;

        

        .work-details {
            ${tw`lg:w-1/2`}
        }
    }
`

const WorkBlock = tw.div`
    md:mt-12
    mb-10 lg:mb-12 
    hover:opacity-75

`

const WorkImage = styled.div`
    position: relative;
    &:after {
        content: "";
        display: block;
        width: 100%;
        background-color: red;
        padding-bottom: calc(900% / 16);
    }
    ${tw`
        mb-2 md:mb-4 
        overflow-hidden
    `}
`


const Image = tw.img`
    object-cover
    h-full
    w-full
    inset-0
    absolute
`

const WorkDetails = tw.div`
`

const WorkTitle = tw.span`
    text-2xl lg:text-3xl 
    font-title
    font-bold 
    uppercase
    text-purple
`

const WorkSub = tw.span`
    text-2xl lg:text-3xl 
    font-light 
    text-black
`

export default function ProjectGrid({ data }) {

    const blocks = data.map(function (block, i) {

        return (

            <Wrapper>
                <Fade delay={300}>
                    <Link key={`project-${i}`} to={`/changework/${block.project._meta.uid}`}>

                        <WorkBlock>

                            <WorkImage className="work-image">
                                <Image src={block.project.lead_image.url}></Image>
                            </WorkImage>

                            <WorkDetails className="work-details">
                                <WorkTitle>
                                    {RichText.asText(block.project.title)}
                                </WorkTitle>
                                <WorkSub>
                                    <span>&thinsp;—&thinsp;</span>
                                    {RichText.asText(block.project.challenge)}
                                </WorkSub>
                            </WorkDetails>

                        </WorkBlock>
                    </Link>
                </Fade>
            </Wrapper>
        )

    })

    return (
        <>
            <WorkGrid>

                {blocks}

            </WorkGrid>
        </>

    )

}