import tw from "twin.macro"
import styled from "@emotion/styled"
import React, { useState } from "react"
import { Link } from "gatsby"

import MobileMenu from "./menu/mobileMenu"

const Wrapper = tw.div`
    block 
    font-display
    relative
`

const Container = tw.div `
    container 
    w-full
    md:mx-auto 
    flex 
    font-normal 
    tracking-wide 
    text-lg 
    justify-end
`

const HeadLinks = tw.div `
    flex 
    items-center
    space-x-6
    w-full
    relative
    bg-green
`

const HeadMain = tw.div `
    flex-grow
`

const HeadNav = tw.div `
    flex space-x-6
`

const SMNLink = tw.div ` 
    inline-block 
    flex-grow
    hover:text-blue 
    tracking-wider 
    font-extrabold
`

const HeadLink = tw.div `
    hidden md:inline-block 
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
    h-full
    py-8
    px-4
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
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