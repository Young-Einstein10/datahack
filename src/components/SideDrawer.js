import React from 'react';
import coatOfArms from './../assets/img/1411px-Coat_of_arms_of_Nigeria 1.png';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { NavContext } from './../contexts/NavContext';
import Navbar from './Navbar';

const SideDrawer = () => {
  return (
    <NavContext.Consumer>{(context) => {
      const { sideDrawerOpen, drawerToggleClickHandler } = context;

      let drawerClasses = 'sidedrawer';
      if (sideDrawerOpen) {
        drawerClasses = 'sidedrawer open'
      }

      return (
        <section className={drawerClasses}> 
          <Navbar />
          <div className="container my-auto">
            <div className="row">
              <div className="col-12">
                <ul className="sidedrawer__nav list-unstyled text-center">                  
                  <li className="sidedrawer__nav-item my-4">
                    {/* <Link to="/chartpage">States</Link> */}
                    <a href="/">Home</a>
                  </li>
                  <li className="sidedrawer__nav-item my-4">
                    <a href="/about">About</a>
                  </li>
                  <li className="sidedrawer__nav-item my-4">
                    {/* <Link to="/search">Search</Link> */}
                    <a href="/search">Search</a>
                  </li>
                </ul>
              </div>

              {/* <div className="col-8">
                <div className="sidedrawer__para px-3">
                  <h2 className="my-2 text-center">About the Project</h2>
                  <p>
                    Irure adipisicing ex eu laborum aliqua mollit id anim non. Consequat consectetur est aliquip in voluptate exercitation quis officia quis . Nostrudconsectetur ullamco labore consectetur voluptate non sunt nulla excepteur. Magna nulla dolore sunt tempor ex deserunt non. eiusmod eu id aliquip laborum quis eu occaecat tempor incididunt labore ad in. Ad id reprehenderit ullamco occaecat officia aliquip voluptate voluptate voluptate. Eu elit laboris veniam ut est. Fugiat aute nulla commodo laboris ullamco aliquip non cillum id anim aliqua. sit exercitation exercitation amet ex est reprehenderit exercitation consectetur deserunt quis. Sit pariatur officia incididunt dolor non.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      )
    }}</NavContext.Consumer>    
  )
}
 
export default SideDrawer;
