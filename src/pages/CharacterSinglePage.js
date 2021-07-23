import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CharacterSinglePage() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;
    console.log(url);
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((characterData) => {
        setCharacter(characterData);
        setIsLoading(false);
      });
  }, [characterId]);

  function renderCharacters() {
    if (isLoading || character === null) {
      return "Loading...";
    }

    const { name, status, gender, species, type, image } = character;

    return (
      <div className="character__singlePage">
        <h2>{name}</h2>

        <div className="character__singlePage--inner">
          <img src={image} alt={name} />
          <h3>Status: {status}</h3>
          <h3>Gender: {gender}</h3>
          <h3>Species: {species}</h3>
          <h3>Type: {type}</h3>
        </div>
      </div>
    );
  }
  return renderCharacters();
}
