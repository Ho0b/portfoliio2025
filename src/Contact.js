import React from 'react';
import './App.css'
import emailjs from '@emailjs/browser'; 
import { BackArrow } from './Buttons';

function ContactForm(){
    const formRef = React.useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_sn2bc8o',
            'template_vcnqjm6',
            formRef.current,
            process.env.REACT_APP_FORM_API_KEY.toString()
        ).then(
            () => {
                alert("Your message has been sent, I'll get to you soon")
            }, () => {
                alert("There was an error in your message. Please look over it again")
            }
        )
    }

    return(
        <form ref={formRef} onSubmit={sendEmail}>
            <div>
                <label>Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" placeholder="e.g name@domain.com" required />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" required />
            </div>
            <button type="submit" id='submitButton'>Send</button>
        </form>
    )
}

function ContactFormContainer(){

    window.scrollTo(0,0)
    return(
        <main>
            <section id='formSection'>
            <BackArrow />
            
            <ContactForm />
            </section>
        </main>
        
    )
}

export default ContactFormContainer