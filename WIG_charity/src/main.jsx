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
import Project from './views/Dashboard/Project.jsx';
import Reports from './views/Dashboard/Reports.jsx';

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
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
