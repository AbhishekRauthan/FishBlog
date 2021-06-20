import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

const FooterContainer = tw.footer`
text-gray-600 px-6 py-4 mx-auto flex items-center sm:flex-row flex-col bg-darkBlue lg:pl-10
`

const IconContainer = tw.span`inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start lg:pr-12 `

const Footer = () => {
  return (
    <FooterContainer>
      <Link
        tw="flex font-medium items-center md:justify-start justify-center text-crimson font-title uppercase lg:text-3xl"
        to="/"
      >
        Fish Blog
      </Link>
      <p tw="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
        © 2020 LiquidAquariumDDN
      </p>
      <IconContainer>
        <a tw="text-slate hover:text-white">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            tw="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a tw="ml-3 text-slate hover:text-white">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            tw="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a tw="ml-3 text-slate hover:text-white">
          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            tw="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </IconContainer>
    </FooterContainer>
  )
}

export default Footer
