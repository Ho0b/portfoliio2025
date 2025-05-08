// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const sections = 
[
  {title: "Gallery", id: 1},
  {title: "Contact", id: 3},
];

function IntroSection(){
  return(
    <div>
      <h2>
        Hello, I'm Netra Hun
      </h2>
      <img src=''>
      </img>
      <p className='width-512px'>
        I am a programming and design undergraduate, 
        I focus on UI and UX development and 
        have created a lot of creative projects.
        Ranging from games, logos, videos, music and short films and animations.
      </p>
    </div>
  )
}

function IntroCard(){
  return(
    <section id='introCard'>
      <IntroSection />
    </section>
  )
}

function Navi(){
  const [showNav, setShowNav] = useState("hidden");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShowNav("hidden");
      } else {
        setShowNav("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Call once in case the page is already scrolled
    handleScroll();

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <nav className={showNav}>
      <h1>Netra Hun</h1>

      <ul>
        <li>
          <a href='about.html'>
            About
          </a>
        </li>
      </ul>

    </nav>
  )
}

function Gallery(){
  return(
    <section>
      
    </section>
  )
}

function Mainsection(){
  return (
    <main>
      
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <Navi />

      <IntroCard />

      <Mainsection />
    </div>
  );
}



export default App;
