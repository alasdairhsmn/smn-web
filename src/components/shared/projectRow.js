import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"


const WorkGrid = tw.div `
    md:grid 
    md:grid-cols-3 
    col-gap-20 
    container 
    md:mx-auto 
    mb-16 md:mb-32 
    mt-12 md:mt-24
`

const RowTitle = tw.div `
    col-span-3 
    text-lg md:text-2xl 
    mb-6 md:mb-12 
    font-display 
    font-light
`

const WorkBlock = tw.div`
    mb-12 md:mb-0
    hover:opacity-75 
`

const WorkImage = tw.div`
    bg-gray-200 mb-6 overflow-hidden
`

const Image = tw.img `
    w-full md:w-full 
    h-sm md:h-med
    object-cover
`

const WorkTitle = tw.div`
    text-2xl md:text-3xl 
    font-display 
    font-extrabold 
    leading-none
`

const WorkSub = tw.div `
    font-light text-lg leading-snug mt-3
`

const WorkTags = tw.div`
    font-mono mt-4 uppercase tracking-widest text-gray-500
`


export default function ProjectRow ({data}) {

    const blocks = data.map(function(block){

        return (

            <Link to={`/changework/${block.node._meta.uid}`}>

            <WorkBlock>

            <WorkImage>
                <Image src={block.node.lead_image.url}></Image>
            </WorkImage>
           
            <WorkTitle>
                <RichText render={block.node.title} />
            </WorkTitle>

            <WorkSub>
                <RichText render={block.node.subheading} />
            </WorkSub>

            <WorkTags>project tag</WorkTags>
            </WorkBlock>
            </Link>

        )

    })

    return (
    <>
            <WorkGrid>

                { blocks }

            </WorkGrid>
    
    </>

    )

}