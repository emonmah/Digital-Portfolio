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
import Certificates from './certificates';
import Technology from './technology';


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
            <Certificates/>
            <Technology/>
            <Extra/>
            <Reference/>
            <Footer/>
            </>
        )
    }
}
export default Portfolio;
