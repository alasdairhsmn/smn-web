import tw from "twin.macro"
import React from "react"
import Layout from "../../components/layout/layout"
import Fade from 'react-reveal/Fade'

import PageTitle from "../../components/shared/pageTitle"


const Hero = tw.div`
    py-24
    flex 
    items-center 
    text-3xl md:text-6xl 
    font-display 
    leading-tight
`

const Placeholder = tw.div `
    w-auto 
    py-32 
    px-32 
    bg-orange
    text-white
    text-2xl md:text-5xl 
    text-center
`

const Block = tw.div `
    container 
    mx-auto
`

const Experience = tw.div `
    bg-yellow 
    text-3xl md:text-5xl 
    py-12 
    font-display 
    min-h-screen 
    flex 
    items-center
`

const Editorial = tw.div `
    flex items-center 
    py-32
`

const EditorialBlock = tw.div `
    container 
    mx-auto 
    w-full md:w-3/4 
    md:flex 
    md:space-x-16
    items-center
`

const EditorialSubHead = tw.div `
    font-display
    font-light
    mb-6
    text-lg
`

const EditorialTitle = tw.div `
    font-display 
    font-extrabold 
    text-2xl md:text-5xl
    leading-tight
    mb-8
`
const EditorialBody = tw.div `
    text-lg 
    md:text-2xl 
    font-light
`

const EditorialImage = tw.div `
    w-full 
    h-sm md:h-med 
    bg-lightgrey 
`

export default function AboutIndex () {

    return (
       <Layout>
           
        <Fade delay={300}>
            <PageTitle
                title={'Change is hard'}
                sub={"But it's possible when people come together in the right way. It's what we call social changework"}
            />
        </Fade>

           <Fade delay={300}>
           <Experience>
                <Block>
                <EditorialTitle>We have...</EditorialTitle>
                    <p>brought together 1000 Londoners to re-imagine the Museum of London &bull; designed a university course for mass collaboration &bull; re-positioned a real estate giant &bull; created a mass membership model for climate action….</p>
                </Block>
           </Experience>
           </Fade>

           <Fade delay={300}>
           <Editorial>
            <EditorialBlock>
               <div>
                <EditorialSubHead>How we do it</EditorialSubHead>
               <EditorialTitle>Engage and inspire your teams</EditorialTitle>
               <EditorialBody>You already have a lot of the answer. We can help you find the ways to unlock it and communicate it through your organisation</EditorialBody>
               </div>
                <EditorialImage></EditorialImage>
            </EditorialBlock>
           </Editorial>
           </Fade>

           <Fade delay={300}>
           <Editorial>
            <EditorialBlock>

            <EditorialImage></EditorialImage>

               <div>
               <EditorialSubHead>How we do it</EditorialSubHead>
               <EditorialTitle>Bring audiences into the process</EditorialTitle>
               <EditorialBody>We create the moments that engage people online, offline and in between. Beyond consultation into co-creation and harnessing mass audiences. Sprints, workshops, residencies, and a methodology to help you make the most of it.</EditorialBody>
               </div>

            </EditorialBlock>
           </Editorial>
           </Fade>

           <Fade delay={300}>
           <Editorial>
            <EditorialBlock>
               <div>
               <EditorialSubHead>How we do it</EditorialSubHead>
               <EditorialTitle>Collaborate with diverse talents</EditorialTitle>
               <EditorialBody>We don’t pretend we have all the answers or expertise – tough challenges need diverse perspectives. </EditorialBody>
               </div>
                <EditorialImage></EditorialImage>
            </EditorialBlock>
           </Editorial>
           </Fade>

           <Fade delay={300}>
           <Placeholder>
               <div>Meet our team</div>
               <div>See our work</div>
               <div>Get in touch</div>
           </Placeholder>
           </Fade>



       </Layout>
    )

}