import rickhome from "../img/RickMorty.webp";

export default function Home() {
  return (
    <main>
      <h2>Check the Rick and Morty characters, now!</h2>
      <img className="home__rick__img" src={rickhome} alt="rickHome-img"></img>
    </main>
  );
}
