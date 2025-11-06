import React from 'react'
import Profile from './profile'
import Summary from './summary';
import Education from './education';
import Thesis from './thesis';
import Project from './project';
import Contest from './contest';
import Extra from './extra';
import Reference from './reference';
import Footer from './footer';


class Portfolio extends React.Component{
    render(){
        return (
            <>
            <Profile/>
            <Summary/>
            <Education/>
            <Thesis/>
            <Project/>
            <Contest/>
            <Extra/>
            <Reference/>
            <Footer/>
            </>
        )
    }
}
export default Portfolio;
