import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const Wrapper = tw.div `
    py-6 md:py-12
    mt-12
`

const WorkGrid = tw.div `
    md:grid 
    md:grid-cols-3 
    col-gap-12 
    container
    mx-auto
    mb-8
`

const WorkBlock = tw.div`
    mb-6 md:mb-12 
    md:mb-0
    hover:opacity-75 
`

const WorkImage = tw.div`
    mb-2 md:mb-4 
    overflow-hidden
`

const Image = tw.img `
    w-full md:w-full 
    h-sm md:h-sm
    object-cover
`

const WorkTitle = tw.div`
    text-2xl md:text-3xl 
    font-title
    font-bold 
    uppercase
    mb-2 md:mb-4 
    leading-none
`

const WorkSub = tw.div `
    font-light 
    text-xl 
    leading-snug 
    mt-3
    text-midgrey
`

const WorkTags = tw.div`
    mt-4 
    uppercase 
    tracking-widest 
    border
    border-black
    rounded-md
    inline-block
    px-3
    py-2
    text-sm
`


export default function ProjectRow ({data}) {

    const blocks = data.map(function(block, i){

        if (i > 2) {

            return null

        } else

        return (

            <Link to={`/changework/${block.project._meta.uid}`}>

            <WorkBlock>

            <WorkImage>
                <Image src={block.project.lead_image.url}></Image>
            </WorkImage>
           
                <WorkTitle>
                    <RichText render={block.project.title} />
                </WorkTitle>

                <WorkSub>
                    <RichText render={block.project.challenge} />
                </WorkSub>

            </WorkBlock>
            </Link>

        )

    })

    return (
    <Wrapper>

        <WorkGrid>
                { blocks }
        </WorkGrid>
    
    </Wrapper>

    )

}