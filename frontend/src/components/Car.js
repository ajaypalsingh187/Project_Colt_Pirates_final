import React from 'react';
import { NavLink } from 'react-router-dom';    
import './Car.css';    

export default function Car(props) {

    return (
        <div className='Car'>
        

            <img src={props.imageSource} alt='Reliable used cars' />

            <p className='Car__title'><strong>{props.title}</strong></p>

            <div className='Car__description'>
                <div>                    
                    <img className='Car__description__icons' 
                        src={require('../assets/calendar.png')}
                        alt='Premium car dealer'
                    />
                    {props.year}
                </div>
                <div>
                    <img className='Car__description__icons' 
                        src={require('../assets/mileage.png')}
                        alt='Low mileage cars'
                    />
                     {props.mileage}{' km'}
                </div>
                <div>
                    <img className='Car__description__icons' 
                        src={require('../assets/engineering.png')}
                        alt='Premium class car dealer in Miechów'
                    />
                    {props.power}{' HP'}
                </div>
                <div>
                    <img className='Car__description__icons' 
                        src={require('../assets/gasoline.png')}
                        alt='Used cars in Miechów'
                    />
                    {props.fuel}
                </div>
            </div>
{/* 
            <NavLink to={`/CarPage/${props.id}`} >
                <p className='Car__button'>DETAILS</p>
            </NavLink> */}
        </div>
    )
}
