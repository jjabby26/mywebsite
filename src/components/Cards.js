import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my Skills! </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/java1.png'
              text='Experienced in JAVA and other OOP concepts!'
              label='JAVA'
              path='/About'
            />
            <CardItem
              src='images/QA.png'
              text='Excel in all phases of SDLC/STLC'
              label='QualityAssurance'
              path='/About'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/API.png'
              text='Efficient API tester(SOAP and RESTful)'
              label='API'
              path='/About'
            />
            <CardItem
              src='images/softwaretest.png'
              text='Skilled in Bug tracking and Reporting'
              label='Bugs'
              path='/About'
            />
            <CardItem
              src='images/html.png'
              text='Creative Designer of Web pages using HTML5/CSS3'
              label='HTML/CSS'
              path='/About'
            />
            <CardItem
              src='images/react.png'
              text='Resourceful and Innovative in using the latest technologies like ReactJS and many more!'
              label='React.js'
              path='/About'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
