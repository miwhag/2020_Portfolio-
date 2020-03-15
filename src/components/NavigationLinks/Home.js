import React, {Component} from 'react'
import HomePageGreeting from '../HomePage/HomePageGreeting';
import HomePageBlocks from '../HomePage/HomePageBlocks';
import SpaceDivider from '../HomePage/SpaceDivider'
import Footer from '../Footer'
import BlogHome from '../HomePage/BlogHome'
import {StyledLogo} from '../HomePage/StyledLogo'
import AboutMe from './AboutMe'

export default class Home extends Component {
    render(){
        return (
            <div className="HomePage">
           
            <header class="main-header"> 
            <HomePageGreeting/>
            <StyledLogo/>
          </header>
          
            <body>
              <AboutMe />
            <HomePageBlocks/>
            <SpaceDivider/>
            <BlogHome/>
            <Footer/>
      
            </body>
      </div>

    )}
}
