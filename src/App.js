import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);


  const fetchInfo = (event) => {
    event.preventDefault();

    console.log("calling api")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => res.json())
      .then(res => {
        console.log(res.results);
        setPokemons(res.results)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>PokéDex</h1>
      <button onClick={fetchInfo} className="btn btn-primary btn-lg">Fetch Pokemon</button>
      <ul>
        {
          pokemons.map((item,i) =>{
            return <li key={i}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
