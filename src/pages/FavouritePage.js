import { useState, useEffect } from "react";

export default function FavouritePage(favouritedCharacter) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://rickandmortyapi.com/api/character/?page=1`;
    fetch(url)
      .then((res) => res.json())
      .then((characterData) => {
        setCharacters(characterData.results);
        setIsLoading(false);
      });
  }, []);

  if (isLoading || characters === null) {
    return "...Loading";
  }

  function renderCharacters() {
    return characters
      .filter((character) => {
        return (
          character?.id === JSON.parse(localStorage.getItem("id")) ||
          character?.id === undefined
        );
      })
      .map((character) => {
        const id = character?.id;
        return (
          <div key={id} className="characters__wrapper">
            <h3>{id}</h3>
            <img src={character?.image} alt={character?.name}></img>
          </div>
        );
      });
  }

  return (
    <>
      <div className="characters__wrapper--main">{renderCharacters()}</div>
    </>
  );
}
