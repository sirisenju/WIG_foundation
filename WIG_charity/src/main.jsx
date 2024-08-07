import React from 'react'
import ReactDOM from 'react-dom/client'
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
import OurTeam from './views/Team/index.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { AuthProvider } from './AuthContext.jsx';
import Blog from './views/Blog/index.jsx';
import Admin from './views/AdminDashboard/index.jsx';
import ErrorPage from './components/404error.jsx';
import DisplayProject from './components/DisplayProject.jsx';



const router = createBrowserRouter([
  {
    path: "*",  // This will catch all unmatched routes
    element: <ErrorPage/>
  },
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
    path: "/blog/:blogtitle",
    element: <Blog/>
  },
  {
    path: "/error",
    element: <ErrorPage/>
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
    path: "/displayProject",
    element: <DisplayProject/>
  },
  {
    path: "/admin",
    element: <ProtectedRoute element={<Admin/>} />
    // element: <Admin/>
  },
  {
    path: "/dashboard", 
    // element: <Dashboard />
    element: <ProtectedRoute element={<Dashboard />} />
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
