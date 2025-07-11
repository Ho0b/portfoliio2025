import React from 'react';
import '../../App.css'
import { BackArrow } from '../../Buttons';
import { FooterSection, NavBar } from '../../App';

function DragonQuestIndex() {

    window.scrollTo(0,0)

    return (
        <main>
            <NavBar/>

            <section>
                <BackArrow />

                <article id='webProj1' className='article768px'>
                    <h1>DRAGON QUEST INDEX</h1>
                    <br></br>
                    <a href='https://ho0b.github.io/dqmjIndex/' target="_blank" rel="noreferrer" aria-label='dragon quest index site'>
                        <figure className='noMargin'>
                            <img className='heroImage' src="/images/dqindex.png" alt='dragon quest'></img>
                        </figure>
                    </a>

                    <div className='bgcSec'>
                    <h2>[Overview]</h2>
                    <p>A simple wiki catered towards the game Dragon Quest Monster Joker. Easy to view monster / creatures cards, with a search bar and a catalog section. <i>Without all the ads</i></p>
                    </div>
                    
                    <br></br>

                    <h2>[Background]</h2>
                    <p>I wanted to make a website to practice a bit with React Javascript and Vite App,and one day I had an idea to make a wiki site of some sort. At first I wanted to make an online video converter, but settled on this game wiki site instead because I was more familiar with the game.</p>
                    <p>Once I had the initial idea, I went ahead and created a wireframe of what I wanted the site to look like.</p>
                    <img className='imageFit' src='/images/dqindexWireframe.png' alt='dragon quest index wireframe'></img>

                    <br></br>

                    <div className='bgcSec'>
                    <h2>[Research]</h2>
                    <p>I drew inspiration from sites like the <a href='https://www.pokemon.com/us/pokedex' target='_blank' rel='noreferrer' aria-label='poke dex site' className='textUnderline'>Pokemon Index</a>, Fandom wiki's <a href='https://dqmj.fandom.com/wiki/Dragon_Quest_Monsters:_Joker_Wiki' target='_blank' rel='noreferrer' aria-label='dragon quest monsters fandom site' className='textUnderline'>Dragon Quest Monsters</a> Page and other various game wiki / media sites for design, and layout inspiration.</p>
                    <p>As a user of the Fandom Wiki site myself, I was concerned with how much extra bloat was on the site. The site by itself is ok, it felt like the focus was more on the wiki aspect rather than <u> game content</u>.</p>
                    <p>So for my own site, I made it a goal to make a wiki site that does not contain ads, is game content focused and easy to use.</p>
                    </div>

                    <br></br>
                    <hr></hr>

                    
                    <h2>[Process]</h2>
                    <h3>Logo</h3>
                    <p>When I began the project, I had a name, and a wireframe. What I needed to figure out was aesthetics, logo, a search feature, a dialog box to show the full list of monsters, and a navigational feature.</p>
                    <p>I first started by making the logo, and focused heavily on what represented Dragon Quest the most and that was the iconic <u>Slime</u>.</p>
                    <img src='/images/slimeDesign.png' alt='slime original design' className='imageFit360px imageMiddle'></img>
                    <p>Original design by Akira Toriyama</p>
                    <br></br>
                    <img src='/images/slime.svg' alt='slime' className='imageFit360px imageMiddle'></img>
                    <p>The overall idea behind this particular logo was, simplicity. Two main colors: Blue for the slime's body, and white for its big smile. I did not want to include the eyes because I wanted it's smile to be the most prominent feature.</p>
                    
                    <br></br>

                    <div className='bgcSec'>
                    <h3>Data</h3>
                    <p>For me to create this card wiki site, I needed character information, and for this I had two options, get the Dragon Quest Nintendo card game and dump its game contents then extract the data I needed,</p>
                    <p>or I can just scrape it from the Fandom wiki, I chose option two.</p>
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.zd4Rhrz9MD7CwtoN9DweIAHaHa%3Fpid%3DApi&f=1&ipt=bddb21797172b332d72fb2e7baf050df01137075754b5562014ed3aad382b1ab' alt='python logo' className='imageFit360px imageMiddle'></img>
                    <p>I wrote a Python script that used the beautiful soup library, as well as the JSON library, downloaded the Fandom Wiki page, then used beautiful soup to extract the info into a Python Dictionary.</p>
                    <p>The information that I got was basically about the monster itself, its:</p>
                    <p>Rank, Family, Skills, Traits, Resistances</p>
                    <p>along side a sprite png file.</p>
                    <p>I then turned that dictionary into a json object file, using the JSON library and then cleaned up the output file so I can use it on the website.</p>
                    </div>
                    
                    <br></br>

                    <h3>The MVP</h3>
                    <img src='/images/mvp.gif' alt='minium viable product' className='imageFit360px imageMiddle'></img>
                    <p>In this sample, I had a header with a search bar, a card display with the monsters sprite and info, plus navigational buttons to switch between the monsters.</p>
                    <p>For me to achieve the card switching, I created a css ID called activeCard, and set every other card to have a class of card with display of none.</p>
                    <p>Whenever a user presses the previous and next button, it would switch the activeCard css tag to the next or previous card.</p>

                    <br></br>

                    <div className='bgcSec'>
                    <h3>Previous and Next Buttons</h3>
                    <p>I got these buttons to work by getting the id of the html tag that contains all the cards. This html tag was then put into a JavaScript variable, where I can get the length of the list, and all I did was keep track of the current card, and added or subtracted to it when the user presses previous or next.</p>
                    <p>Lets say a user presses the back button on monster number 1, and in this case: Slime (a computer array starts with 0 instead of 1). It would take the length number of the list which is 210, and then apply it to the current card variable, making the card switch to 210, which is the monster Wildcard</p>
                    <p>I used React states to keep track of the number so that it rerenders the screen when the current number changes</p>
                    </div>

                    <br></br>

                    <h3>Search Bar</h3>
                    <p>A working example of the search feature, you can type in the name as well as the id of the monster.</p>
                    <p>To achieve this, all I did was take the users input from the search box, use the filter method in JavaScript, compare what the user type in to the monsters name or id, then returned what matched within the search results box.</p>
                    <p>Made the result items buttons, and switched the monster to the desired choice.</p>
                    <p>This is also thanks to React's states, and the useStates hook.</p>
                    <img src='/images/searchBar.gif' alt='search bar feature' className='imageMiddle imageFit360px'></img>

                    <br></br>

                    <div className='bgcSec'>
                    <h3>Catalog Button</h3>
                    <p>This was just a dialog box that pops up whenever the user clicks on the book icon in the search bar.</p>
                    <p>A dialog box is invisible until something calls it, and in this case: its the ShowModal function. The purpose of the book icon then is to active the ShowModal function and reveal the dialog box.</p>
                    <p>Inside the dialog box is a container with two divs, one for the header and one for the actual content.</p>
                    <p>The heading box has the title and the closing button to close the dialog box, users can also press enter escape to close it as well.</p>
                    <p>In the next box, it houses all the monsters, sectioned off by id and name, formatted using css grid.</p>
                    <img src='/images/catalog.gif' alt='search bar feature' className='imageMiddle imageFit360px'></img>
                    </div>

                    <br></br>
                    <hr></hr>

                    <h2>[Feedback]</h2>
                    <p>I sent this app out for people to test, I sent this to friends, and members of the User Experience Discord server.</p>
                    <p>Comments that I got back was mainly about the color contrast, and typography, and animation choice</p>
                    <p>I first addressed the color contrast by darking areas where the text is white or bright, and doing the opposite for dark text</p>
                    <p>the second was type: for this I changed the font from <span className='font1'>Germania One</span> to <span className='font2'>Pixelify Sans</span></p>
                    <p>In accordance to how the sprites themselves are pixelated, and thus it made more sense to have the text also be pixelated.</p>
                    <p>The final comment was about the card animation being a bit repetitive, I tried figuring out how to make the cards transition between each other but I got a bit lost, and I will revisit it eventually.</p>

                    <br></br>

                    <h2>Results and Conclusions</h2>
                    <p>Making a wiki site is difficult, although mine is simple and does not have a lot of features: I was still able to make something that is usable and something that serves a purpose, which is to provide information</p>
                    <p>I got to learn a bit more about React Hooks, how to create a search feature, how to create modals, buttons, and learned some more styling tricks, and advanced front end techniques.</p>

                </article>

            </section>

            <FooterSection/>
        </main>
    )
}

export default DragonQuestIndex