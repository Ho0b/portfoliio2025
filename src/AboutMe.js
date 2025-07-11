import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import {ContactMeButton} from './Buttons';
import { FooterSection } from './App';



function Description(){
    return(
        <div className='center_flex'>
            <p className='width-fit line_spacing'>
            Hello again, my name is Netra Hun and I am an aspiring UX/UI developer based in PA. I am all about
            merging the worlds of programming and design together. I am still very new to the game but am willing to
            put all my effort into learning this field.
            </p>
            <p className='width-fit line_spacing'>
            I am a recent graduate from Widener University, May 2025, with a degree in Digital Media Informatics. A joint major
            that combines both, the world of Computer Science and Communications. During my time here, I made a whole host of projects
            ranging from Unity games, Graphics, 3D models, Story scripts, and Videos.
            </p>
            <p className='width-fit line_spacing'>
            I originally picked Computer Science when I started school because I've always liked messing around with electronics. That
            passion eventually found its way into design and understanding the end user. Naturally, I switched my major and leaned towards 
            a career in UX/UI development because of its flexibility in catering my passion for both programming and design.
            </p>
            <p className='width-fit line_spacing'>
            When I am not in school or working, I like to relax by making art, music, playing some video games and hanging out with friends. 
            If the weather is clear, I like to bike, run, swim, and explore what nature's got. I don't like to stay in one place, and would rather
            find new and exciting things, so if you like to keep things fresh and would like someone who is about that. 
            
            <ContactMeButton/>
            </p>

        <Link to={"/"}><button >Home</button> </Link>
        </div>
    )
}

function About(){
    window.scroll(0,0)
    return(
        <main>
            <section id='aboutSection'>
            <h1 id='aboutMeH1'>ABOUT ME</h1>
            <Description />
            </section>
            <FooterSection/>
        </main>
        
    )
}

export default About