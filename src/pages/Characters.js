import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((res) => res.json())
      .then((characterData) => {
        setCharacters(characterData.results);
      });
  }, []);

  function renderCharacters() {
    return characters.map((character) => {
      const id = character?.id;
      return (
        <div key={id} className="characters-wrapper">
          <Link to={`/characters/${id}`}>
            <h2>{character?.name}</h2>
            <img src={character?.image} alt={character?.name}></img>
          </Link>
        </div>
      );
    });
  }

  return renderCharacters();
}
