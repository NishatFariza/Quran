import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'


interface PropsType {
    children: React.ReactNode | React.ReactNode[] | undefined;
}

const Layout: React.FC<PropsType> = ({ children}) => {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}

export default Layout