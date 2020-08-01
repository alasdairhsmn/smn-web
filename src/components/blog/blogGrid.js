import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"
import { RichText } from 'prismic-reactjs'


const Grid = tw.div `
    grid 
    py-16 md:py-0
    md:grid-cols-2 
    gap-8 md:col-gap-40 
    container 
    md:mx-auto 
    mb-32
    w-3/4
`

const BlogItem = tw.div ` 
    w-auto    
    mt-8 
    hover:opacity-75
    mb-8 
`

const BlogImage = tw.div `
    bg-gray-200 
    mb-6 
    w-full
    overflow-hidden
`

const Image = tw.img `
    h-sm md:h-med 
    w-full    
    object-cover
`

const BlogTitle = tw.div`
    text-3xl font-display font-extrabold leading-none font-bold
`

const BlogSub = tw.div `
    font-light text-xl leading-tight mt-4
`

const BlogTags = tw.div`
    font-mono mt-4 uppercase tracking-widest text-gray-500
`



export default function BlogGrid ( {data} ) {

    const blocks = data.map(function(post){
        return (

            <Fade delay={300}>
            <Link to={`/blog/${post.node._meta.uid}`}>
                
                <BlogItem>

                    <BlogImage>
                        <Image src={post.node.lead_image.url}></Image>
                    </BlogImage>

                    <BlogTitle>
                        <RichText render={post.node.title} />
                    </BlogTitle>

                    <BlogSub>
                        <RichText render={post.node.subhead} />
                    </BlogSub>
                    
                    <BlogTags>
                        <p>Tags</p>
                    </BlogTags>
                    
                </BlogItem>

            </Link>
            </Fade>
        )   
    })

        return (

         <Grid>{ blocks } </Grid>

    )

}