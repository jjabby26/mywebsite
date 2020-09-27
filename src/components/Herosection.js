import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';


function Herosection(){
    return(
    <div className='hero-container'>
        <video src='/images/buildings.webm' autoPlay loop muted/>
        <h1>WELCOME</h1>
        <p>This is All about Me!</p>
        <div className="hero-btns">
         
         
          <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
            {/* <Link to='/getStarted' className='nav-links' onClick={closeMobileMenu}></Link> */}
           GET STARTED
          </Button>




          <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('HEY')}
          >
           JUVERIA  JABEEN<i className='fas fa-cloud-sun'/>
          </Button>

        </div>
    </div>
    );
}
export default Herosection;