import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import Fade from 'react-reveal/Fade'


const Editorial = tw.div `
    flex 
    container
    mx-auto
    items-center 
    min-h-screen80
    py-32
    border-b-8
    border-black
    grid 
    grid-cols-12
`

const EditorialBlock = tw.div `
    mx-auto 
    items-center
    col-span-5
    col-start-3
`

const EditorialTitle = tw.div `
    font-title 
    font-semibold 
    uppercase
    text-2xl md:text-10xl
    leading-extra-tight
    mb-16
`
const EditorialBody = tw.div `
    text-lg 
    md:text-3xl 
    font-light
    leading-tight
`

export default function AboutEditorial ( {data} ) {

    const blocks = data.map(function(block){

        return (
        <Editorial>
        <EditorialBlock>
           <div>

           <EditorialTitle>
                <RichText render={block.primary.heading} />
            </EditorialTitle>

           <EditorialBody>
                <RichText render={block.primary.copy} />
            </EditorialBody>
           </div>

        </EditorialBlock>
        </Editorial>
        )

    })

    return (

        <Fade delay={300}>
            { blocks }    
        </Fade>          

    )

}