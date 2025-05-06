// import logo from './logo.svg';
import './App.css';

const sections = 
[
  {title: "Gallery", id: 1},
  {title: "About", id: 2},
  {title: "Contact", id: 3},
];

function Navi(){
  return(
    <nav>
      <h1>Netra Hun</h1>

      <ul>
        <li>
          <a>
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

      <header className="App-header">
        <Mainsection />
      </header>
    </div>
  );
}



export default App;
