import React, { useState } from 'react';

export default function CharacterSearch() {
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCharacters(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search">
        <input 
          type="text" 
          className="campo" 
          value={name}
          placeholder='Digite um Personagem'
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="submit">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
          </svg>   
        </button>
      </form>
        <div className='galeria'>
            {characters.map(character => (
            <div key={character.id} className='personagem'>
                <img className='personagem-img' src={character.image} alt={character.name} />
                <h3 className='name'>{character.name}</h3>
        </div>
        ))}
      </div>
    </div>
  );
}
