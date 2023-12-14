import React from 'react';
import './home.css';
export default function Home (){
    return(
      
       <div className='container'>
        <div className='home'>
            <div className="home-content">
                <h1>Car Dealing Experience.</h1>
                <h3>Redefined!</h3>
                <p>"Ahoy there! Welcome to Colt Pirates – your ultimate destination for swashbuckling deals on high-quality used cars! At Colt Pirates, we understand that finding the perfect ship for your land adventures is no easy feat. That's why we've assembled a fleet of pre-owned treasures, each meticulously inspected and ready to set sail on new journeys. Navigate our virtual showroom and uncover a trove of reliable, stylish, and affordable vehicles that'll have you saying 'Arr matey!' in no time. With a commitment to transparency, customer satisfaction, and a passion for delivering outstanding service, Colt Pirates is here to make your car-buying adventure smooth and enjoyable. So, hoist the anchor and embark on a voyage to discover the ideal ride that suits your lifestyle, needs, and budget. Set sail with Colt Pirates – where the seas of used car shopping have never been more exciting!"</p>
                <a href='offers' className='btn'>Explore Cars</a>
                
            </div>

            <div class="home-img">
                <div class="rhombus">
                    <img 
                        src={require('../assets/car.png')} 
                        alt='Colt Pirates Logo' 
                    />
                </div>
            </div>
            </div>

            </div>
            
            
       
    )
}