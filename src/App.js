// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const sections = 
[
  {title: "Gallery", id: 1},
  {title: "Contact", id: 3},
];

var showNav = (window.scrollY < 250) ? "hidden" : "show"

function IntroCard(){
  return(
    <section id='introCard'>

    </section>
  )
}

function Navi(){
  const [showNav, setShowNav] = useState("hidden");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 250) {
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

function Mainsection(){

  const numberOfSections = sections.map(title =>
    <section key={title.id}>
      <p>
        this is the {String(title.title)} section
      </p>
    </section>
  )

  return (
    <main>
      {numberOfSections}
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
