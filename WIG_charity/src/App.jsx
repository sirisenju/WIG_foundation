import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Dashboard from './views/Dashboard';

function App() {
    return (
        <>
            {/* <Dashboard/> */}
            <Navbar/>
            <Home/>
            <Footer/>
        </>
    )
}

export default App
