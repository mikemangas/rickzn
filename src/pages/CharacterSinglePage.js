import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CharacterSinglePage() {
  const characterId = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;
    fetch(url)
      .then((res) => res.json())
      .then((characterData) => {
        setCharacter(characterData);
      });
  }, [characterId]);

  //   function renderCharacters() {
  //     return (
  //       <div className="character-single-page">
  //         <h2>{character?.name}</h2>
  //         <img src={character?.image} alt={character?.name}></img>
  //       </div>
  //     );
  //   }
  //   return renderCharacters();
  return console.log(character.results);
}
