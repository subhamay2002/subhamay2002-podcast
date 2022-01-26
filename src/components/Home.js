import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Aboutus from './pages/Aboutus'
import Footer from './Footer'

export default function Home(props) {
    const [Page, setPage] = useState('home')
    useEffect(() => {
        setPage(JSON.parse(window.localStorage.getItem('Page')));
    }, []);
    useEffect(() => {
        window.localStorage.setItem('Page', JSON.stringify(Page));
    });

    if (Page === 'home') {
        return (
            <div>
                <Navbar setstatus={props.setstatus} setPage={setPage} />
                <Dashboard />
                <Footer />
            </div>
        )
    } else if (Page === 'profile') {
        return (
            <div>
                <Navbar setstatus={props.setstatus} setPage={setPage} />
                <Profile />
                <Footer />
            </div>
        )
    } else if (Page === 'aboutus') {
        return (
            <div>
                <Navbar setstatus={props.setstatus} setPage={setPage} />
                <Aboutus />
                <Footer />
            </div>
        )

    }
}
