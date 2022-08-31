import { ButtonHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const Button = ({ children, ...buttonProps }: ButtonTypes) => {
  return (
    <ButtonStyled {...buttonProps}>
      {children}
    </ButtonStyled>
  )
}

export default Button