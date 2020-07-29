import tw from "twin.macro"
import styled from "@emotion/styled"
import React, { useState } from "react"
import { Link } from "gatsby"

import MobileMenu from "./menu/mobileMenu"

const Wrapper = tw.div`
    block 
    font-display
    relative
    fixed md:static
    z-50
    w-full
    bg-white
`

const Container = tw.div `
    container 
    w-full
    md:mx-auto 
    flex 
    font-normal 
    tracking-wide 
    text-base md:text-lg 
    justify-end
    py-0 md:py-6
`

const HeadLinks = tw.div `
    flex 
    items-center
    space-x-6
    w-full
    relative
`

const HeadNav = tw.div `
    flex 
    space-x-8 
    hidden md:block
`

const SMNLink = tw.div ` 
    inline-block 
    flex-grow
    hover:text-blue 
    tracking-wider 
    font-extrabold
`

const HeadLink = tw.div `
    inline-block
    hover:text-blue 
    font-light 
    font-sans
`

const Toggle = tw.div`
    cursor-pointer
    flex
    items-center
    justify-end
    z-50
    h-8
    py-8
    px-4
    md:hidden
`

const Hamburger = styled.div`
  background-color: #111;
  width: 21px;
  height: 3px;
  transition: all .1s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 21px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.1s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-7px, 0px)" : "rotate(0deg)"};
    top: -7px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 7px;
  }
`

const Navbox = styled.div`
  ${tw`
    flex
    h-screen
    w-full
    z-20
    fixed
    bg-white
    transition-all
    duration-300
    ease-in
  `}
    left: ${props => (props.open ? "-100%" : "0")};
`


const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Wrapper>
           
            <Container>

                <HeadLinks>

                <SMNLink>
                    <Link to={'/'}>
                        Something More Near
                    </Link>    
                </SMNLink>

                <Toggle
                    navbarOpen={navbarOpen}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >

                {navbarOpen ? <Hamburger open /> : <Hamburger />}

                </Toggle>

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

                </HeadLinks>



            

            </Container>

            {navbarOpen ? (
            <Navbox>
                <MobileMenu />
            </Navbox>
            ) : (
            <Navbox open>
                <MobileMenu />
            </Navbox>
            )}

        </Wrapper>
    )

}

export default Header