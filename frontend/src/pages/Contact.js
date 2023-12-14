import React, { useState } from 'react';
import './Pages.css';
import axios from 'axios';
import Thanks from './Thanks'; // Import the Thanks component

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        contents: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);

        try {
            const response = await axios.post('http://localhost:3001/api/contacts', formData);

            console.log('Form submitted successfully', response.data);

            // Set the formSubmitted state to true after successful form submission
            setFormSubmitted(true);
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    // Render the Thanks component if the form has been submitted
    if (formSubmitted) {
        return <Thanks />;
    }
    
    return (
        <div className='contact-area'>
            <span className='contact-area__form'>
                <h3>Contact form</h3>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder='NAME' onChange={handleChange} />
                    <input type="text" name="lastName" placeholder='LAST NAME' onChange={handleChange} />
                    <input type="text" name="phoneNumber" placeholder='PHONE NUMBER' onChange={handleChange} />
                    <input type="email" name="emailAddress" placeholder='EMAIL ADDRESS' onChange={handleChange} />
                    <textarea type="text" name="contents" placeholder='CONTENTS' onChange={handleChange} />

                    <input id='contact-area__button' type='submit' value='SUBMIT' />

                    <input type="hidden" name="_subject" value="Klient przysłał zapytanie"></input>
                    <input type="hidden" name="_next" value="https://alfamotors.pl/thanks"></input>
                </form>
            </span>

            <span className='contact-area__info'>
                <h3>Contact information</h3>
                
                <div>
                    <img src={require('../assets/phoneIcon.png')} alt="Wiarygodni dealerzy samochodów używanych" />
                    <span>Phone: +1 204 894 6024</span>
                </div>
                <div>
                    <img src={require('../assets/email.png')} alt="Używane auta dobrej jakości" />
                    <span>E-mail: coltpirates187@gmail.com</span>
                </div>
                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11533.606091769656!2d-79.85888118015454!3d43.72298504683007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b115efcab4e1d%3A0x3be53fec574542c3!2s96%20Eberly%20Wds%20Dr.%2C%20Caledon%2C%20ON%20L7C%204J4!5e0!3m2!1sen!2sca!4v1701275863816!5m2!1sen!2sca"></iframe>
            </span>        
        </div>
    );
}