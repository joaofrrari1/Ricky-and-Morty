import React, { useState } from 'react';

export default function CharacterList() {
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
