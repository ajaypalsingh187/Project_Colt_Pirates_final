import React, { useState } from 'react';
import './Pages.css';
import './Thanks';
import { Link } from 'react-router-dom';
import Thanks from './Thanks';

export default function Buy() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Your form submission logic here, e.g., using fetch or axios

        // After successful form submission, set submitted to true
        setSubmitted(true);
    };

    return (
        <div id="Buy">
            <div id="Buy__area">
                <h3>Purchase Form</h3>

                {submitted ? (
                    <Thanks/>
                ) : (
                    <form onSubmit={handleSubmit} action="https://formsubmit.co/alfamotors.contact@gmail.com" method="POST" encType="multipart/form-data">
                        <span className='column-inputs'>
                            <input type="text" name="Name" placeholder='Name' required/>
                            <input type="text" name="Last Name" placeholder='Last Name' required/>
                            <input type="text" name="Phone number" placeholder='Phone number' />
                            <input type="email" name="Email address" placeholder='Email address' required/>
                            <input type="text" name="Proposed price" placeholder='Proposed price'/>
                        </span>

                        <span className='column-inputs'>
                            <input type="text" name="Brand and model" placeholder='Brand and model' required/>
                            <input type="text" name="Year of production" placeholder='Year of production' required/>
                            <input type="text" name="Engine version" placeholder='Engine version' required/>
                            <input type="text" name="Mileage" placeholder='Mileage' required/>
                            <input type="text" name="Country" placeholder='Country of origin' required/>
                        </span>

                        <span id='third-span'>
                            <textarea type="text" name="Message" placeholder='Custom vehicle description/comment/note' required rows='4' />
                            <input id='Buy__area__button' type='submit' value='Submit' />
                        </span>
                    </form>
                )}
            </div>
        </div>
    );
}
