import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home/index.jsx';
import About from './views/About/index.jsx';
import Login from './authpages/Login/index.jsx';
import Signup from './authpages/Signup/index.jsx';
import Causes from './views/Cause/index.jsx';
import Dashboard from './views/Dashboard/index.jsx';
import ProjectDetails from './views/Dashboard/ReadProject.jsx';
import OurTeam from './views/Team/index.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { AuthProvider } from './AuthContext.jsx';
import Blog from './views/Blog/index.jsx';
import Admin from './views/AdminDashboard/index.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/causes",
    element: <Causes/>
  },
  {
    path: "/ourteam",
    element: <OurTeam/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/dashboard", 
    //element: <Dashboard />
    element: <ProtectedRoute element={<Dashboard />} />
  },
  {
    path: "/projects/:projectTitle", 
    //element: <ProjectDetails />
    element: <ProtectedRoute element={<ProjectDetails />} />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
