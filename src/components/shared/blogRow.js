import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"
import ButtonLink from "~/components/shared/buttonLink";

const Wrapper = tw.div`
    bg-lightgrey
    py-6 md:py-20
`

const WorkGrid = tw.div`
    md:grid 
    md:grid-cols-3 
    col-gap-12 
    container
    mx-auto
    mb-8
`

const RowTitle = tw.div`
    container 
    mx-auto
    mb-4 md:mb-8
    flex
    items-center
    uppercase
`

const RowTitleMain = tw.div`
    font-title
    font-bold
    text-4xl md:text-7xl
    flex-grow
    leading-normal
`

const WorkBlock = tw.div`
    mb-6 md:mb-12 
    md:mb-0
    hover:opacity-75 
`

const WorkImage = tw.div`
    mb-3 md:mb-6 
    overflow-hidden
`

const Image = tw.img`
    w-full
    h-auto
`

const WorkTitle = tw.div`
    text-xl md:text-3xl
    leading-normal
    font-normal
    tracking-tight
`

const WorkAuthor = tw.div`
    font-normal 
    text-xl 
    leading-snug 
    lg:mt-3
    text-midgrey
    tracking-tight
`

export default function BlogRow({ data, id }) {

    const blocks = data.filter(block => block.node._meta.uid !== id).map(function (block, i) {

        return (

            <Link key={`blogItem-${i}`} to={`/blog/${block.node._meta.uid}`}>

                <WorkBlock>

                    <WorkImage>
                        <Image src={block.node.lead_image.url}></Image>
                    </WorkImage>

                    <WorkTitle>
                        <RichText render={block.node.title} />
                    </WorkTitle>

                    <WorkAuthor>
                        <RichText render={block.node.author.name} />
                    </WorkAuthor>

                </WorkBlock>
            </Link>

        )

    })

    return (
        <Wrapper>

            <RowTitle>

                <RowTitleMain>The Blog</RowTitleMain>

            </RowTitle>

            <WorkGrid>
                {blocks[0]}
                {blocks[1]}
                {blocks[2]}
            </WorkGrid>

            <div css={tw`flex justify-center lg:mt-20`}>
                <ButtonLink href="/blog">Read More</ButtonLink>
            </div>
        </Wrapper>

    )

}
