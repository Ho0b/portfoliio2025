import logo from './nh.svg';
import './App.css';
import media from './media.json';
import games from './games.json';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import {ContactMeButton , AboutMeButton, HomeButton} from './Buttons';
import {SocialsContent} from './Socials';

// const sections = 
// [
//   {title: "Gallery", id: 1},
//   {title: "Contact", id: 3},
// ];

function IntroSection({changeActiveButton}){
  return(
      <div className='gap_50px'>
        <h2>
          Netra Hun | Programmer and Designer
        </h2>
        <img src={logo} alt='Hero Icon' id='heroicon'>
        </img>
        <div>
          <SocialsContent/>
        </div>
        <Link to={"/about"} onClick={() => {changeActiveButton(0)}}><button id='aboutMeButton'>More About Me!</button></Link>
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

export function NavContent(){
  return(
    <ul>
        <li>
          <HomeButton/>
        </li>
        <li>
          <AboutMeButton/>
        </li>
        <li>
          <ContactMeButton/>
        </li>
    </ul>
  )
}

export function Navi(){
  
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
      if (window.scrollY < 48) {
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
    <button aria-label='hamburger menu button' className={'hamButton ' + showHam} onClick={()=>{(showHam === "hideHam") ? showContents() : hideContents()}}></button>
    <div id={showHamNav}>
        <NavContent/>
    </div>

    <div id='bigNav'>
        <NavContent/>
      </div>
    </nav>
    
  )
}

export function NavBar(){
  return(
    <div id='navWrapper'>
        <Navi />
      </div>
  )
}


function Gallery(){
  var imageArray = media.images.map((img, index) => 
    (
      <figure key={index}>
        <img key={index} src={"images/"+img.src} alt={img.caption}/>
        <figcaption>{img.caption}</figcaption>
      </figure>
    
    )
  )

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
        <source src={"videos/"+game.videosrc} type='video/mp4'></source>
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
function Films(){

  // var iconsArray = media.icons.map((img, index) => (
  //   <img key={index} src={"portfoliio2025/images/"+img.src} alt={img.src.slice(0,-4)}/>
  // ))

  return(
    <section>
      <div className='shortfilmGallery'>
          <iframe src="https://www.youtube.com/embed/LZpCD_3fKCw?si=EU_FN0c6p7r8vwCq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  )
}

function Websites(){
  return(
    <section>
      <Link id='websiteCard' to={"/projects/dqindex"}>
        <article>
          <h1>Dragon Quest Index</h1>
          <figure>
            <img src='images/dqindex.png' alt='dragon quest index site screenshot' width={360}></img>
            <figcaption>Character wiki for the game Dragon Quest Monster Joker</figcaption>
          </figure>
          <aside id='featuredTechnologies'>
            <h2>
              Technologies
            </h2>
            <div className='flexEvenRow'>
              <figure>
                <img className='technologiesIcons' src='images/viteIcon.png' alt='vite icon'></img>
                <figcaption>Vite App</figcaption>
              </figure>
              <figure>
                <img className='technologiesIcons' src='images/reactIcon.png' alt='react icon'></img>
                <figcaption>React.js</figcaption>
              </figure> 
              <figure>
                <img className='technologiesIcons' src='images/gitIcon.png' alt='git icon'></img>
                <figcaption>Git</figcaption>
              </figure>
              <figure>
                <img className='technologiesIcons' src='images/adobeIcon.png' alt='adobe icon'></img>
                <figcaption>Adobe Suite</figcaption>
              </figure>
            </div>
          </aside>
        </article>
      </Link>
        
    </section>
  )
}

/*

  card component

*/


function Mainsection({getActiveButton ,changeActiveButton}){

  const [currentSection, setSection]= useState(<Websites/>)

  return (
    <main>
      <h2 id='projectsh2'>Projects</h2>
      <div id='projectButtons'>
      <button disabled={getActiveButton===0} onClick={()=>{setSection(<Websites/>); changeActiveButton(0)} }>💻 Websites</button>
      <button disabled={getActiveButton===1} onClick={()=>{setSection(<Games/>); changeActiveButton(1)} }>🕹 Games</button>
      <button disabled={getActiveButton===2} onClick={()=>{setSection(<Gallery/>); changeActiveButton(2)} }>📦 3D</button>
      <button disabled={getActiveButton===3} onClick={()=>{setSection(<Films/>); changeActiveButton(3)} }>🎞 Short Films</button>
      </div>

      <div>
        {currentSection}
      </div>
    
      <FooterSection />
    </main>
  )
}

export function FooterSection(){
  return(
    <footer className='center_flex'>
      <p className='txt_center width-fit'>Thank you for visiting my site, I hope you liked it, if you want to work on something together</p>
      <ContactMeButton/>

      <SocialsContent/>
    </footer>
  )
}

function App() {
  const [activeProjectButton, setActiveProjectButton] = useState(0)
  window.scroll(0,0)
  return (
    <div className="App">
      <NavBar/>

      <IntroCard changeActiveButton={setActiveProjectButton}/>

      <Mainsection getActiveButton={activeProjectButton} changeActiveButton={setActiveProjectButton}/>
    </div>
  );
}



export default App;
