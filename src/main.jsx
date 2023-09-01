import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './App'
import ErrorPage from './components/error-page'
import Contact from './components/ContactPage'
import About from './components/AboutPage'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />
	},
	{
		path: "contact",
		element: <Contact />
	},
	{
		path: "about",
		element: <About />
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
