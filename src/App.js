import logo from './nh.svg';
import './App.css';
import media from './media.json';
import games from './games.json';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import {ContactMeButton , AboutMeButton} from './Buttons';

// const sections = 
// [
//   {title: "Gallery", id: 1},
//   {title: "Contact", id: 3},
// ];



var disabledSection = [true, false, false]

export function setDisableSections(){
  disabledSection = [true, false, false]
}

function IntroSection(){
  return(
      <div className='gap_50px'>
        <h2>
          Hello, I'm Netra Hun
        </h2>
        <img src={logo} alt='Hero Icon' id='heroicon'>
        </img>
        <p className='width-fit'>
          I program and design things. Below are my projects that i've done, I am good with Web technologies and Design tools.
        </p>
        <Link to={"/about"} onClick={() => (disabledSection = [true, false, false])}><button id='aboutMeButton'>More About Me!</button></Link>
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

function NavContent(){
  return(
    <ul>
        <li>
          <AboutMeButton/>
        </li>
        <li>
          <ContactMeButton/>
        </li>
    </ul>
  )
}

function Navi(){
  
  const [showHam, setShowHam] = useState("");
  const [showHamNav, setShowHamNav] = useState("hamburger");
  const [showNav, setShowNav] = useState("hiddenNav");

  function showContents(){
    setShowHam("showHam")
    setShowHamNav("hamburgerOpen")
  }
  function hideContents(){
    setShowHam("hideHam")
    setShowHamNav("hamburger")
  }

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShowNav("hiddenNav");
        hideContents()
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
    <h1>Netra Hun</h1>
    <button className={'hamButton ' + showHam} onClick={()=>{(showHam === "hideHam") ? showContents() : hideContents()}}></button>
    <div id={showHamNav}>
        <NavContent/>
    </div>
    </nav>
    
  )
}

function Gallery(){
  var imageArray = media.images.map((img, index) => (
    <img key={index} src={"portfoliio2025/images/"+img.src} alt={img.src.slice(0,-4)}/>
  ))

  return(
    <section>
      <div className='gallery'>
        {imageArray}
      </div>
    </section>
  )
}

function Games(){

  var gamesArray = games.FinishedGames.map((game, index) => (
    <article key={index} className='gameSectionArticle'>
      <video controls={true} autoPlay={false} controlsList='nodownload noremoteplayback noplaybackrate'>
        <source src={"portfoliio2025/videos/"+game.videosrc} type='video/mp4'></source>
      </video>
      <h3 aria-label='game name'>{game.gamename}</h3>
      <h4 aria-label='genre'>{game.genre}</h4>
      <p aria-label='game description'>{game.description}</p>
    </article>
  ))
  return(
    <section>
      {gamesArray}
    </section>
  )
}
function Logos(){

  var iconsArray = media.icons.map((img, index) => (
    <img key={index} src={"portfoliio2025/images/"+img.src} alt={img.src.slice(0,-4)}/>
  ))

  return(
    <section>
      <div className='gallery'>
        {iconsArray}
      </div>
    </section>
  )
}

function FooterSection(){
  return(
    <footer className='center_flex'>
      <p className='txt_center width-fit'>Thank you for visiting my site, I hope you liked it, if you want to work on something</p>
      <ContactMeButton/>
    </footer>
  )
}

function Mainsection(){

  const [currentSection, setSection]= useState(<Games />)

  return (
    <main>
      <h2 id='projectsh2'>Projects</h2>
      <div id='projectButtons'>
      <button className='primaryOpposite' disabled={disabledSection[0]} onClick={ () => (setSection(<Games />), disabledSection=[true, false, false])}>Games</button>
      <button className='primaryOpposite' disabled={disabledSection[1]} onClick={() => (setSection(<Gallery />), disabledSection=[false, true, false])}>3D Models</button>
      <button className='primaryOpposite' disabled={disabledSection[2]} onClick={() => (setSection(<Logos />), disabledSection=[false, false, true])}>Icons</button>
      </div>

      <div>
        {currentSection}
      </div>
    
      <FooterSection />
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <div id='navWrapper'>
        <Navi />
      </div>

      <IntroCard />

      <Mainsection />
    </div>
  );
}



export default App;
