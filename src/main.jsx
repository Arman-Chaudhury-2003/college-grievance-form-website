import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: "",
                element: <Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
