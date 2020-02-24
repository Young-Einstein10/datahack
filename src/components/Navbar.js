import React from 'react';
import coatOfArms from './../assets/img/1411px-Coat_of_arms_of_Nigeria 1.png';
import { NavContext } from '../contexts/NavContext';

const Navbar = () => {
  return (
    <NavContext.Consumer>{(context) => {
      const { sideDrawerOpen, drawerToggleClickHandler } = context;
     
      return (
        <header className="container myheader">
          <nav className="d-flex">
            <div className="col-6 px-0 text-center d-flex align-items-center justify-content-end">
              <li className="sidedrawer__nav-item coat__of__arms mt-3 list-unstyled">
                <img src={coatOfArms} alt="CoatOfArms" />
              </li>
            </div>

            <div className="col-6 px-0 d-flex align-items-center justify-content-end">
              <div className="search mx-3 " style={{cursor: 'pointer'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6125 15.4914C18.7935 13.8787 19.4999 11.8977 19.4999 9.7501C19.4999 4.37415 15.1259 0.00012207 9.74993 0.00012207C4.37398 0.00012207 0 4.37415 0 9.7501C0 15.1261 4.37403 19.5001 9.74998 19.5001C11.8975 19.5001 13.8787 18.7936 15.4915 17.6126L21.8789 24L24 21.8789C24 21.8789 17.6125 15.4914 17.6125 15.4914ZM9.74998 16.5001C6.02781 16.5001 3.00001 13.4723 3.00001 9.7501C3.00001 6.02794 6.02781 3.00013 9.74998 3.00013C13.4721 3.00013 16.4999 6.02794 16.4999 9.7501C16.4999 13.4723 13.4721 16.5001 9.74998 16.5001Z" fill="white"/>
                </svg>
              </div>

              <div onClick={drawerToggleClickHandler} style={{cursor: 'pointer'}} className="close-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M9.39131 0H1.5652H0V1.5652V9.39131V10.9565H1.5652H9.39131H10.9565V9.39131V1.5652V0H9.39131Z" fill="white"/>
                  <path d="M22.4353 0H14.6091H13.0439V1.5652V9.39131V10.9565H14.6091H22.4353H24.0005V9.39131V1.5652V0H22.4353Z" fill="white"/>
                  <path d="M9.39131 13.0435H1.5652H0V14.6087V22.4348V24H1.5652H9.39131H10.9565V22.4348V14.6087V13.0435H9.39131Z" fill="white"/>
                  <path d="M22.4353 13.0435H14.6091H13.0439V14.6087V22.4348V24H14.6091H22.4353H24.0005V22.4348V14.6087V13.0435H22.4353Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>    
            </div> 
          </nav>
        </header>
      )
    }}</NavContext.Consumer>
  )
}

export default Navbar;
