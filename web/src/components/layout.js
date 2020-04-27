import React from 'react'
import PropTypes from "prop-types"

import Footer from "./footer"

import "./layout.css"
import styles from './layout.module.css'

const Layout = ({children}) => (
  <>
    <div>
      <main>{children}</main>
      <Footer/>
    </div>
  </>
)

export default Layout
