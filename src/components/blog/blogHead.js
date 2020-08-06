import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import {RichText, Date} from 'prismic-reactjs';


const Container = tw.div `
    container
    mx-auto
    w-full
    h-auto
    md:grid
    grid-cols-12
    gap-4
    mb-12
    mt-8
`

const Major = tw.div `
    md:border-r-2
    border-black
    col-span-7
`

const Title = tw.div `
    text-4xl md:text-8xl
    font-title
    font-bold
    tracking-tight
    leading-extra-tight
    mb-8 md:mb-20
    uppercase
`

const Aligner = styled.span `
::before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    margin-bottom: -50px;
  }
`

const Minor = tw.div `
    col-span-5
    flex
    items-end
`

const Body = tw.div `
    font-sans
    text-3xl md:text-3xl
    leading-none
    md:pr-12
    font-normal
`

const Meta = tw.div `
  text-xl
  text-midgrey
  mt-4
`


export default function BlogHead ( {data} ) {

    	
const date = Date(data.date_published);
const formattedDate = Intl.DateTimeFormat('en-US',{
  year: 'numeric',
  month: 'long'}).format(date);

    return (

        <Container>

            <Major>
                <Title>
                    <Aligner>
                        <RichText render={data.title} />
                    </Aligner>
                </Title>
            </Major>

            <Minor>
                <Body>
                    <RichText render={data.subhead} />
                    
                    <Meta>
                        {RichText.asText(data.author.name)} &bull; {formattedDate}
                    </Meta>
                    
                </Body>
            </Minor>

        </Container>

    )

}