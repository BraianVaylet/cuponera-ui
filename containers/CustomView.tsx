import { Fragment, ReactNode } from 'react'

export interface CustomViewTypes {
  children: ReactNode
}

const CustomView = ({ children, ...props }: CustomViewTypes) => (
  <Fragment {...props}>
    {children}
  </Fragment>
)

export default CustomView