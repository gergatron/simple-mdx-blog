import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import { FooterWrapper,FooterSocialWrapper ,FooterSocialIcons } from "../elements"

export const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      google: file(relativePath: {eq: "google.svg"}){
        publicURL
      }
      node: file(relativePath: {eq: "node.svg"}){
        publicURL
      }
      steam: file(relativePath: {eq: "steam.svg"}){
        publicURL
      }
      ubuntu: file(relativePath: {eq: "ubuntu.svg"}){
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a 
            href="https://google.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={data.google.publicURL} alt="Google" />
          </a>
          <a 
            href="https://google.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={data.node.publicURL} alt="node" />
          </a>
          <a 
            href="https://google.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={data.steam.publicURL} alt="steam" />
          </a>
          <a 
            href="https://google.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={data.ubuntu.publicURL} alt="ubuntu" />
          </a>
        </FooterSocialIcons>
      </FooterSocialWrapper>
    </FooterWrapper>
    )
}