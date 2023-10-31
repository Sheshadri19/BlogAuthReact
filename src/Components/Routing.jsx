import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import { AuthData } from '../Authentication/ContextAuth'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import { ToastContainer } from 'react-toastify'
import Profile from './Profile'
import About from './About'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Comment from './Comment'
import Category_Details from './Category_Details'
import Course from './Course'
import Contact from './Contact'
import ApplyCourse from './ApplyCourse'
import Search from './Search'




const Routing = () => {

  function ProtectedRoute({ children }) {
    const token = localStorage.getItem("auth") || sessionStorage.getItem("auth");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }

  // public Route

  const PublicRoute = [

    {
      path: '/login',
      element: <Login />
    },

    {
      path: '/register',
      element: <Register />
    }

  ]

  // private route

  const PrivateRoute = [
    {
      path: '/home',
      element: <Home />
    },

    {
      path: '/about',
      element: <About />
    },

    {
      path: '/blog',
      element: <Blog />
    },

    {
      path: '/blogdetails/:_id',
      element: <BlogDetails />
    },

    {
      path: '/categorydetails/:_id',
      element: <Category_Details />
    },

    {
      path: '/profile',
      element: <Profile />
    },

    {
      path: '/comment/:_id',
      element: <Comment />
    },

    {
      path: '/course',
      element: <Course />
    },

    {
      path: '/contact',
      element: <Contact />
    }
    ,

    {
      path: '/applycourse/:_id',
      element: <ApplyCourse />
    },
    {
      path: '/search/:encodeVal',
      element: <Search />
    }

  ]

  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          {
            PublicRoute?.map((item, key) => {
              return (
                <>
                  <Route

                    key={key + 1}
                    path={item?.path}
                    element={item.element}
                  />
                </>
              )
            })
          }

          {
            PrivateRoute?.map((item, key) => {
              return (
                <>
                  <Route
                    key={key + 1}
                    path={item.path}
                    element={<ProtectedRoute>{item.element}</ProtectedRoute>}

                  />
                </>
              )
            })
          }
        </Routes>
      </Router>





      {/* <ToastContainer/>
    <Router>

      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/comment/:_id' element={<Comment/>}/>
        <Route path='/categorydetails/:_id' element={<Category_Details/>}/>
        <Route path='/blogdetails/:_id' element={<BlogDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router> */}

    </>
  )
}

export default Routing