import React from 'react';
import Navbar from "./Navbar";
import { NavContext } from '../contexts/NavContext';

 
const About = () => {
  return (
    <section id="about">
      <header className="container">
        <Navbar />
      </header>
      <div className="container d-flex" style={{height: 'calc(100vh - 110px)'}}>
        <div className="row justify-content-center align-items-center">
          <div className="col-7 text-center">
            <h3 style={{fontSize: '2rem'}}>
              About the Project
            </h3>
            <p style={{fontSize: '1.2rem'}}>
              Do velit tempor sint laborum. Laborum et esse aliquip amet dolor ipsum laborum sunt culpa exercitation duis cupidatat in voluptate. Culpa elit mollit nostrud adipisicing qui deserunt enim consequat amet laboris reprehenderit. Sit in elit id velit pariatur. Non laborum nostrud culpa aliqua reprehenderit sint excepteur exercitation irure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
