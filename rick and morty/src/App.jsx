import './App.css'
import CharacterSearch from './Components/CharacterSearch';
import Header from './Components/Header';

const fetchCharacters = (name) => {   
  setLoading(true);
     fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
       .then(response => response.json())
       .then(data => {
         setCharacters(data.results || []);
         setLoading(false);
       })
       .catch(error => {
         setError(error);
         setLoading(false);
       });
   };  

function App() {

  return (
    <>
      <Header />
      <CharacterSearch />
    </>
  )
}

export default App
