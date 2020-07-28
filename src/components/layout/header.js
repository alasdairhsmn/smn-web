import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"


const Wrapper = tw.div`
    block 
    font-display
`

const Container = tw.div `
    container 
    w-full
    md:mx-auto 
    md:flex 
    py-4 md:py-6 
    font-normal 
    tracking-wide 
    text-lg 
    justify-end
`

const HeadMain = tw.div `
    flex-grow
`

const HeadNav = tw.div `
    flex space-x-6
`

const SMNLink = tw.div ` 
    inline-block 
    hover:text-blue 
    tracking-wider 
    font-extrabold
`

const HeadLink = tw.div `
    inline-block md:inline-block 
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