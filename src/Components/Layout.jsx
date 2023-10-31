import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({children,title,description,author,keywords}) => {


  return (
  <>
  <Helmet>
    <meta charSet='UTF-8'/>
    <meta name='description' content='description'/>
    <meta name='keywords' content='keywords'/>
    <meta name='author' content='author'/>
    <title>{title}</title>
  </Helmet>

  <main>{children}</main>
  
  </>
  )
}

Layout.defaultProps={
  title:"Blog Data",
  description:"Blog realated data",
  keywords:"mern,react,node,Blog data",
  author:"Sheshadri Mondal"

}

export default Layout