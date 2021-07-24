import rickhome from "../img/RickMorty.webp";

export default function Home() {
  return (
    <main>
      <h2>Welcome to the Rick and Morty app</h2>
      <img className="home__rick__img" src={rickhome} alt="rickHome-img"></img>
      <p>Feel free to check the Rick and Morty Characters</p>
    </main>
  );
}
