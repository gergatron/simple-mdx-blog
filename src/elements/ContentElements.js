import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 2 / span 6;
  grid-row: 3 / span 5;
  background: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  @media ${props => props.theme.breakpoints.desktop} {
    padding: ${props =>
      `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
    grid-column: 4 / span 8;
  }
`
