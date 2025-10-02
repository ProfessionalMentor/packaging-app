import React from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import CustomElegentPackages from './components/CustomElegentPackages'
import Register from './components/Register'
import Footer from './components/Footer'
import Login from './components/Login'

const router = createBrowserRouter([

    {
        path: "/",
        element:(
            <>
            <Navbar/>
            <Home />,
            <Footer/>
            </>
        )
    },

    {
        path: "/products",
         element:(
            <>
            <Navbar/>
            <Products />,
            <Footer/>
            </>
        )

    },

    {
        path: "/about",
         element:(
            <>
            <Navbar/>
            <About />,
            <Footer/>
            </>
        )
    },
    {
        path: "/blog",
         element:(
            <>
            <Navbar/>
            <Blog />,
            <Footer/>
            </>
        )

    },

    {
     
        path: "/services",
         element:(
            <>
            <Navbar/>
            <Services />,
            <Footer/>
            </>
        )

    },

    {
        path: "/contact",
         element:(
            <>
            <Navbar/>
            <Contact />,
            <Footer/>
            </>
        )
    },

    {
        path: "/customelegentpackages",
         element:(
            <>
            <Navbar/>
            <CustomElegentPackages/>
            <Footer/>
            </>
        )
    },
    {
        path: "/register",

         element:(
            <>
            <Navbar/>
            <Register />,
            <Footer/>
            
            </>
        )


    }
    ,

    {
        path: "/login",
         element:(
            <>
            <Navbar/>
            <Login />,
            <Footer/>
            </>
        )
    }
    





])

const App = () => {
  return (
    <>
    
    <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App