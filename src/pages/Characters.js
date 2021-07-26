import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState();
  const [status, setStatus] = useState();
  const { charactersId } = useParams(1);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    const url = `https://rickandmortyapi.com/api/character/?page=${charactersId}`;
    fetch(url)
      .then((res) => res.json())
      .then((characterData) => {
        setCharacters(characterData.results);
        setIsLoading(false);
      });
  }, [charactersId]);

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
      .filter((character) => {
        return (
          character.status.toLowerCase().includes(status) ||
          status === undefined
        );
      })
      .map((character) => {
        const id = character?.id;
        return (
          <div key={id} className="characters__wrapper">
            <Link to={`/characterz/${id}`}>
              <h3>{character?.name}</h3>
              <img src={character?.image} alt={character?.name}></img>
            </Link>
          </div>
        );
      });
  }

  function handleClickNext() {
    history.push(`/characters/${Number(charactersId) + 1} `);
  }

  function handleClickPrevious() {
    history.push(`/characters/${Number(charactersId) - 1} `);
  }

  function handleOnChange(event) {
    const input = event.target.value;
    const inputToLowerCase = input.toLowerCase();

    setInput(inputToLowerCase);
  }

  function handleOnChangeSelect(event) {
    const statusInput = event.target.value;
    const statusInputToLowerCase = statusInput.toLowerCase();

    setStatus(statusInputToLowerCase);
  }

  return (
    <>
      <div className="character--filter">
        <input
          onChange={handleOnChange}
          className="characters--filter characters--input"
          type="text"
          placeholder="filter by name"
        ></input>
        <select
          className="characters--filter characters--select"
          onChange={handleOnChangeSelect}
        >
          <option value="">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div className="characters__wrapper--main">{renderCharacters()}</div>
      <div className="characters__wrapper--main__button--wrapper">
        <button
          onClick={handleClickPrevious}
          className="characters__wrapper--main__button--load"
        >
          Previous
        </button>
        <button
          className="characters__wrapper--main__button--load"
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
