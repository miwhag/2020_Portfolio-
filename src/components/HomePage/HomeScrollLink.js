import { Link, animateScroll as scroll } from "react-scroll";

import React from 'react'

export default function HomeScrollLink() {
    return (
        <Link 
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {800}
        className="Footer-navigation"
        to='navbar'>Scroll to Top</Link>
    )
}
