import React from 'react';
import './App.css'


function Description(){
    return(
        <p>
            I am a creatively driven person, I love making things that I like
            and if there is a game / software / tool that lets me be creative,
            I will learn what it is and do a project. I love the creative process
            its fun for me because I like seeing something come to life. I've
            always lived by that idea, and it has brought me here.
        </p>
    )
}

function About(){
    return(
        <main>
            <Description />
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('about'));
root.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
);

