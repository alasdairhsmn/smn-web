import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'


const TextBlock = tw.div `
    border-t-8
    border-black    
`

const TextCol = tw.div `
    md:w-7/12
`

const Title = tw.div `
    text-2xl md:text-5xl 
    font-title
    font-semibold 
    uppercase
    leading-extra-tight
    pt-6
    pb-8
`

const Subhead = tw.div `
    text-lg md:text-xl 
    font-sans 
`



export default function ProjectImageGridTitle ( {data, string} ) {

    if(string.length !== 0 ) {

        return (
            <>
        
        
                    <TextBlock>

                    <TextCol>
        
                    <Title>
                        <RichText render={data.section_title} />
                    </Title>
        
                    <Subhead>
                        <RichText render={data.section_summary} />
                    </Subhead>

                    </TextCol>
        
                    </TextBlock>
            </>
        
            )
        
    } else {
        return null
    }



}