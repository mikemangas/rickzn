import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [pagecount, setPagecount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState();

  useEffect(() => {
    setIsLoading(true);
    const url = `https://rickandmortyapi.com/api/character/?page=${pagecount}`;
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
    return characters
      .filter((character) => {
        return (
          character.name.toLowerCase().includes(input) || input === undefined
        );
      })
      .map((character) => {
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

  function handleOnChange(event) {
    const input = event.target.value;
    const inputToLowerCase = input.toLowerCase();

    setInput(inputToLowerCase);
  }
  return (
    <>
      <input
        onChange={handleOnChange}
        className="characters--input"
        type="text"
        placeholder="filter by name"
      ></input>
      <p>{input}</p>
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
