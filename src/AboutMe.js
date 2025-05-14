import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import {ContactMeButton} from './Buttons';



function Description(){
    return(
        <div className='center_flex'>
            <p className='txt_center width-fit line_spacing'>
            I am a creatively driven person, I love making things that I like
            and if there is a game / software / tool that lets me be creative,
            I will learn what it is and do a project. I love the creative process because
            I love that feeling of making something come to life. Sometimes, what comes out is not great
            but as long as I am continuing to learn things, I am happy with that.
            if you share that passion and or want to work something out. <ContactMeButton/>
        </p>

        <Link to={"/"}><button className='aboutPage'>Home</button> </Link>
        </div>
    )
}

function About(){
    return(
        <section>
            <Description />
        </section>
    )
}

export default About