import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AddCourseComponent from './pages/admin_pages/AddCourseComponent.jsx'
import AddSkillComponent from './pages/admin_pages/AddSkillComponent.jsx'
import SignIn from './pages/public_pages/Auth/SignIn.jsx'
import SkillDetailsPage from './pages/public_pages/SkillDetails.jsx'
import SkillsPage from './pages/Skills.jsx'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />
		},
		{
			path: '/login',
			element: <SignIn/>
		},
		{
			path: '/skills',
			element: <SkillsPage/>
		}
		,
		{
			path: '/skill/:slug',
			element: <SkillDetailsPage/>

		},
		{
			path: '/admin/skills/add',
			element: <AddSkillComponent/>
		},
		{
			path: '/admin/courses/add',
			element: <AddCourseComponent/>
		}

	]
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>,
)
