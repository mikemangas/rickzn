import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [pagecount, setPagecount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://rickandmortyapi.com/api/character/?page=${pagecount}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((characterData) => {
        setCharacters(characterData.results);
        setIsLoading(false);
      });
  }, [pagecount]);

  if (isLoading || characters === null) {
    return "...Loading";
  }

  function renderCharacters() {
    return characters.map((character) => {
      const id = character?.id;
      return (
        <div key={id} className="characters__wrapper">
          <Link to={`/characters/${id}`}>
            <h3>{character?.name}</h3>
            <img src={character?.image} alt={character?.name}></img>
          </Link>
        </div>
      );
    });
  }

  function handleOnClickButtonLoadNext() {
    setPagecount(pagecount + 1);
  }

  function handleOnClickButtonLoadPrev() {
    setPagecount(pagecount - 1);
  }

  return (
    <>
      <div className="characters__wrapper--main">{renderCharacters()}</div>
      <div className="characters__wrapper--main__button--wrapper">
        <button
          onClick={handleOnClickButtonLoadPrev}
          className="characters__wrapper--main__button--load"
        >
          Previous
        </button>
        <button
          onClick={handleOnClickButtonLoadNext}
          className="characters__wrapper--main__button--load"
        >
          Next
        </button>
      </div>
    </>
  );
}
