import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"


const Wrapper = tw.div`
    block 
    w-full 
    font-display
`

const Container = tw.div `
    container 
    mx-8 md:mx-auto 
    md:flex 
    py-6 
    font-normal 
    tracking-wide 
    text-lg 
    justify-end
`

const HeadMain = tw.div `
    flex-grow
`

const HeadNav = tw.div `

`

const SMNLink = tw.div `
    mr-8 md:ml-8 
    inline-block 
    hover:text-blue 
    tracking-wider 
    font-extrabold
`

const HeadLink = tw.div `
    mr-8 md:ml-8 
    block md:inline-block 
    hover:text-blue 
    font-light 
    font-sans
`

export default function Header () {

    return (

        <Wrapper>

            <Container>

            <HeadMain>
            <Link to={'/'}>
                <SMNLink>SOMETHING MORE NEAR</SMNLink>
            </Link>
            </HeadMain>

            <HeadNav>

            <Link to={'/about'}>
                <HeadLink>About</HeadLink>
            </Link>

            <Link to={'/changework'}>
                <HeadLink>Changework</HeadLink>
            </Link>

            <Link to={'/blog'}>
                <HeadLink>Blog</HeadLink>
            </Link>
            </HeadNav>

            </Container>

        </Wrapper>

    )

}