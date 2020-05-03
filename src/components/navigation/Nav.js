import React, { useState, useEffect } from 'react';
import { Navbar as DesktopNavbar } from './Desktop/Navbar';
import { Navbar as MobileNavbar } from './Mobile/Navbar';

export const Nav = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    const handleResize = e => {
        setWindowWidth(window.innerWidth)
    }

    return windowWidth > 768
        ? <DesktopNavbar />
        : <MobileNavbar />
}
