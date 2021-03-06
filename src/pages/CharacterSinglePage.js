import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function CharacterSinglePage() {
  const { characterId } = useParams([]);
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((characterData) => {
        setCharacter(characterData);
        setIsLoading(false);
      });
  }, [characterId]);

  function handleClickNext() {
    history.push(`/characterz/${Number(characterId) + 1} `);
  }

  function handleClickPrevious() {
    history.push(`/characterz/${Number(characterId) - 1} `);
  }

  function handleFavouriteButton() {
    // localStorage.setItem("id", characterId);

    const characterObj = {
      name: character.name,
      image: character.image,
    };
    const storage = localStorage.getItem("characterObj");
    if (storage !== null) {
      const storedCharacter = storage;
      const favouriteCharacter = JSON.parse(storedCharacter);
      favouriteCharacter.push(characterObj);
      localStorage.setItem("characterObj", JSON.stringify(favouriteCharacter));
    } else {
      const favouriteCharacter = [];
      favouriteCharacter.push(characterObj);
      localStorage.setItem("characterObj", JSON.stringify(favouriteCharacter));
    }

    alert(`Character successfully saved in favourites`);
  }

  function renderCharacters() {
    if (isLoading || character === null) {
      return "... loading";
    }
    const { name, status, gender, species, type, image } = character;

    return (
      <div className="character__singlePage">
        <h2>{name}</h2>
        <button
          onClick={handleFavouriteButton}
          className="characters__singlePage__favouritebutton"
        >
          Save this Character
        </button>

        <div className="character__singlePage--inner">
          <div className="button__container">
            <button onClick={handleClickPrevious}>Previous Character</button>
            <button onClick={handleClickNext}>Next Character</button>
          </div>
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
