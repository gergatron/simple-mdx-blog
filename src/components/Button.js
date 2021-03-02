import React from "react"
import {ButtonWrapper} from "../elements"

const Button = ({children, href}) => {
  return (
    <ButtonWrapper to={href}>
      {children}
    </ButtonWrapper>
  )
}

export default Button 