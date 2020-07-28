import React from "react"
import Fade from 'react-reveal/Fade'

import ProjectQuote from "../work/projectQuote"
import ProjectImageGrid from "../work/projectImageGrid"
import ProjectCarousel from "../work/projectCarousel"


export default function ProjectSlices ( {data} ) {

    if(data) {

    const blocks = data.map(function(slice){

        if(slice.type === 'quote') {
    
        return (

            <Fade delay={300}>
            <ProjectQuote data={slice}></ProjectQuote>
            </Fade>
           
        )

    } else if(slice.type === 'image_grid') {

        return (
            <Fade delay={300}>
           <ProjectImageGrid data={slice}></ProjectImageGrid>
           </Fade>
        )

    } else if(slice.type === 'image_carousel') {

        return (
            <Fade delay={300}>
                <ProjectCarousel data={slice}></ProjectCarousel>
           </Fade>
        )


    } else {
        return (
            <p>no template yet</p>
        )
    }
    
    })

    return (
    <>
        { blocks }
    </>

    )

    } else {
        return null
    }

}