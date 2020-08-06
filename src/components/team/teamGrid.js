import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'

import { RichText } from 'prismic-reactjs'

const WorkGrid = tw.div `
    grid 
    py-16 md:py-0
    md:grid-cols-2 
    gap-8 md:gap-40
    container 
    md:mx-auto 
    mb-32
    w-3/4
`

const TeamBlock = tw.div`
    w-auto 
    mt-8
    mb-8  
`

const TeamImage = tw.div`
    bg-gray-200 
    mb-6 
    h-sm
    overflow-hidden
`

const Image = tw.img `
    h-full
    w-full
    object-cover
`

const TeamTitle = tw.div`
    text-3xl font-display font-extrabold leading-none font-bold
`

const TeamSub = tw.div `
    font-light text-xl leading-tight mt-4
`

export default function TeamGrid ( {data} ) {

    const blocks = data.map(function(block){
    
        return (

            <Fade delay={300}>

                <TeamBlock>

                    <TeamImage>
                        <Image src={block.person.image.url}></Image>
                    </TeamImage>

                    <TeamTitle>
                        <RichText render={block.person.name} />
                    </TeamTitle>

                    <TeamSub>
                        <RichText render={block.person.role} />
                    </TeamSub>

                    <TeamSub>
                        <RichText render={block.person.in_brief} />
                    </TeamSub>

                </TeamBlock>

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