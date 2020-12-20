import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const Wrapper = tw.div`
    pt-6 md:pt-12
`

const WorkGrid = tw.div`
    md:grid 
    md:grid-cols-2 
    col-gap-12 
    container
    mx-auto
`

const WorkBlock = tw.div`
    md:mt-12
    mb-6 md:mb-12 
    md:mb-0
    hover:opacity-75 
`

const WorkImage = tw.div`
    mb-2 md:mb-4 
    overflow-hidden
    h-sm lg:h-lg
`

const Image = tw.img`
    object-cover
    h-full
    w-full
`

const WorkDetails = tw.div`
`

const WorkTitle = tw.span`
    text-2xl md:text-3xl 
    font-title
    font-bold 
    uppercase
    text-purple
`

const WorkSub = tw.span`
    text-2xl md:text-3xl 
    font-light 
    text-black
`

export default function ProjectRow({ data }) {

    const blocks = data.slice(1, 3).map(function (block, i) {

        if (i > 2) {

            return null

        } else

            return (

                <Link key={`project-${i}`} to={`/projects/${block.project._meta.uid}`}>

                    <WorkBlock>

                        <WorkImage>
                            <Image src={block.project.lead_image.url}></Image>
                        </WorkImage>

                        <WorkDetails>
                            <WorkTitle>
                                {RichText.asText(block.project.title)}
                            </WorkTitle>
                            <WorkSub>
                                <span>&ensp;—&ensp;</span>
                                {RichText.asText(block.project.challenge)}
                            </WorkSub>
                        </WorkDetails>

                    </WorkBlock>
                </Link>

            )

    })

    return (
        <Wrapper>

            <WorkGrid>
                {blocks}
            </WorkGrid>

        </Wrapper>

    )

}