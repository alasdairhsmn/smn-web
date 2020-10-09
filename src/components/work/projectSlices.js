import React from "react"
import Fade from 'react-reveal/Fade'

import ProjectQuote from "./projectQuote"
import ProjectImageGrid from "./projectImageGrid"
import ProjectEditorialBlock from "./projectEditorialBlock"
import ProjectCarousel from "./projectCarousel"
import ProjectStats from "./projectStats"
import BodyText from "../shared/bodyText"
import ProjectVideo from "./projectVideo"


export default function ProjectSlices ( {data} ) {

    if(data) {

    const blocks = data.map(function(slice){

        if(slice.type === 'quote') {
    
        return (

            <Fade delay={300}>
                <ProjectQuote data={slice} />
            </Fade>
           
        )

    } else if(slice.type === 'image_grid') {

        return (
        <Fade delay={300}>
           <ProjectImageGrid data={slice} />
        </Fade>
        )

    } else if(slice.type === 'editorial_block') {

        return (
        <Fade delay={300}>
           <ProjectEditorialBlock data={slice} />
        </Fade>
        )

    } else if(slice.type === 'body_text') {

        return (
            <Fade delay={300}>
                <BodyText data={slice} />
           </Fade>
        )
    }
    
    else if(slice.type === 'video') {

        return (
            <Fade delay={300}>
                <ProjectVideo data={slice} />
           </Fade>
        )
    }
    
    else {
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