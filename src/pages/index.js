import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard 
          date="date" 
          title="title" 
          excerpt="excerpt" 
          slug="/slug" 
        />
      </Content>
    </Container>
  )
}

export default IndexPage
