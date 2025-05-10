import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// const sections = 
// [
//   {title: "Gallery", id: 1},
//   {title: "Contact", id: 3},
// ];

function IntroSection(){
  return(
    <div>
      <h2>
        Hello, I'm Netra Hun
      </h2>
      <img src={logo} alt='Hero Icon'>
      </img>
      <p className='width-fit'>
        I am a programming and design undergraduate, and 
        my consentration is UI and UX development. I've created a lot of creative projects over the years.
        Ranging from games - using Unity / C#, logos, videos, music, short films, animations and 
        3D models - using Blender, and I coded this website, using HTML, CSS, JS / React.
      </p>
      <a href='about.html'>More About Me!</a>
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
  const [showNav, setShowNav] = useState("hiddenNav");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShowNav("hiddenNav");
      } else {
        setShowNav("showNav");
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
      <h1>
        <a href='index.html'>Netra Hun</a>
      </h1>

      <ul>
        <li>
          <a href='mailto:business.netrahun@gmail.com' >
            Contact
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
      <Gallery />
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
