import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  grid-column: 2 / span 6;
  grid-row: 2 / 4; 
  overflow: hidden;
  position: relative; 
  
  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 3 / span 10;
  }
`