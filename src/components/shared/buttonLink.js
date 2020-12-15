import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"

const Container = tw.div`
    bg-darkblue
    inline-flex
    items-center
    justify-center
    text-xl text-white
    leading-none
    font-normal
    inline-block
    rounded-xl
    hover:bg-blue
    transition-colors
    duration-300
    tracking-tight
    min-w-56
`

export default function ButtonLink(props) {

  return (
    <Container>
      <Link css={tw`block px-12 py-5 text-center`} to={props.href}>{props.children}</Link>
    </Container>
  );
}