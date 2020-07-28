import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"
import { RichText } from 'prismic-reactjs'


const Grid = tw.div `
    grid grid-cols-2 gap-24 container mx-auto mb-32
`

const BlogItem = tw.div `
    container mx-auto mt-8 hover:opacity-75 
`

const BlogImage = tw.div `
    bg-gray-200 mb-6 overflow-hidden
`

const Image = tw.img `
    w-full h-med object-cover
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