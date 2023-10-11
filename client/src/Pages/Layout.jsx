import React from 'react'
import { Footer, Navbar } from '../Components'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {
                children
            }
            <Footer />
        </>
    )
}

export default Layout