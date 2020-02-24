import React, { Component } from 'react';
import Dropdown  from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import coatOfArms from './../assets/img/1411px-Coat_of_arms_of_Nigeria 1.png';
import Nigeria from "./../Nigeria.js";
import { NavContext } from './../contexts/NavContext';
import './ChartPage.css';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
// import { Navbar } from 'react-bootstrap';

const Column2 = () => {
  return (
    <div className="column2">
      
    </div>
  )
}

const projects = ['Crop Production', 'Fishery', 'Forestry', 'LiveStock', 'Marketing', 'Poultry', 'Processing', 'Rural Infrastructure']

const Column3 = () => {
  return (
    <div className="column3 text-center">
      <h3>SUB-PROJECT ENTERPRISE</h3>
      <div>
      {
        projects.map((project, index) => (
          <div key={index} className="my-2">
            <p className="mb-0">{project}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}


export default class ChartPage extends Component {
  state = {
    states: ["Bayelsa"],
    LGAs: ["Brass", "Ekeremor", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa", "Kokokuma Opokuma"],
    footerDetails: ["Project", "Total Cost of SubProject", "IDA Amount", "Beneficiary Contribution", "STATUS", "Male Beneficiary", "Female Beneficiary"]
  };

  static contextType = NavContext;

  // gridStyles = {
  //   height: document.querySelector('header').clientHeight,
  //   width: document.querySelector('header').clientWidth
  // }

  render() {
    const { LGAs, footerDetails } = this.state;
    const { drawerToggleClickHandler } = this.context;

    return (
      <div>
        <Navbar />
        <div className="app-item">
          <div className="column1">       
            {/* States */}
            <div className="states">
              <select className="states__list mx-auto">
                {
                  Nigeria.map((state, index) => {
                    const { states: { name } } = state;
                    return (
                      <option className="states__list-item" key={index}>{name}</option>
                    )
                  })
                }
              </select>
            </div>
           
    
            {/* LGAs */}
            <div className="LGAs text-center">
              <ListGroup>
              <h4 className="LGA__list-header">LGAs</h4>
                {
                  LGAs.map((lga, index) => {
                    return (
                      <li className="LGA__list-item" key={index}>
                        <Link style={{color: '#fff', textDecoration: 'none'}} to={`/${lga}`}>{lga}</Link>                
                      </li>
                    )
                  })
                }
              </ListGroup>
            </div>
          </div>


          <Column2 />
          <Column3 />
        </div>  
        <footer className="my-5 container text-center">
          <div className="my-3 no-gutters row justify-content-between">
            {
              footerDetails.map((data, index) => (
                <div key={index} className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" for="inlineCheckbox1">{data}</label>
                </div>
              ))
            }
          </div>
          <p className="my-4">
            TICK THE INFORMATION THAT YOU WILL LIKE TO VIEW ON THE GRAPH. UP TO 3 CATEGORIES CAN BE VIEWED AT A TIME
          </p>
        </footer>     
      </div>
    )
  }
}
