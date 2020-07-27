import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'

import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const WorkGrid = tw.div `
    grid md:grid-cols-2 gap-24 container mx-auto mb-32
`

const WorkBlock = tw.div`
    container mx-auto mt-8 hover:opacity-75 
`

const WorkImage = tw.div`
    bg-gray-200 mb-6 overflow-hidden
`

const Image = tw.img `
    object-cover w-full h-med
`

const WorkTitle = tw.div`
    text-3xl font-display font-extrabold leading-none font-bold
`

const WorkSub = tw.div `
    font-light text-xl leading-tight mt-4
`

const WorkTags = tw.div`
    font-mono mt-4 uppercase tracking-widest text-gray-500
`

export default function ProjectGrid ( {data} ) {

    const blocks = data.map(function(block){
    
        return (

            <Fade delay={300}>
            <Link to={`/changework/${block.project._meta.uid}`}>
            
            <WorkBlock>

            <WorkImage>
                <Image src={block.project.lead_image.url}></Image>
            </WorkImage>

            <WorkTitle>
                <RichText render={block.project.title} />
            </WorkTitle>

            <WorkSub>
                <RichText render={block.project.subheading} />
            </WorkSub>

            <WorkTags>project tag</WorkTags>

            </WorkBlock>
            </Link>
            </Fade>
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