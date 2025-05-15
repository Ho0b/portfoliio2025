import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'; 



function ContactForm(){
    const formRef = React.useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_sn2bc8o',
            'template_vcnqjm6',
            formRef.current,
            process.env.FORM_API_KEY.toString()
        ).then(
            (result) => {
                console.log('form was submitted', result.text)
            }, (error) => {
                console.log('there was an error', error.text)
            }
        )
    }

    return(
        <div className='center_flex'>
            <form ref={formRef} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

function ContactFormContainer(){
    return(
        <section>
            <ContactForm />
            <Link to={"/"}><button className='primaryOpposite'>Home</button></Link>
        </section>
    )
}

export default ContactFormContainer