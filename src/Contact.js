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
        <div className='center_flex'>
            <form ref={formRef} onSubmit={sendEmail}>
                <div>
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="John Doe" required />
                </div>
                <div>
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="e.g name@domain.com" required />
                </div>
                <textarea name="message" placeholder="Your Message" required />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

// function ShowAlert(){
//     return(
//         <dialog>

//         </dialog>
//     )
// }

function ContactFormContainer(){
    return(
        <section id='formSection'>
            <Link to={"/"}><button className='primaryOpposite'>Home</button></Link>
            <ContactForm />
            
        </section>
    )
}

export default ContactFormContainer