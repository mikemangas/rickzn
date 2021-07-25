export default function FavouritePage(favouritedCharacter) {
  const favChar = localStorage.getItem("characterObj");
  const favCharParse = JSON.parse(favChar);

  function renderCharacters() {
    if (favCharParse !== null) {
      const renderedCharacter = favCharParse.map((character) => {
        return (
          <div className="characters__wrapper">
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </div>
        );
      });
      return renderedCharacter;
    } else {
      return (
        <p>Hey, hey! You didnt add any Characters in your fav list yet.</p>
      );
    }
  }

  return (
    <>
      <div className="characters__wrapper--main">{renderCharacters()}</div>
    </>
  );
}
