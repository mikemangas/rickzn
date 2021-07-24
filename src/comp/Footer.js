import phone from "../img/phone-call.png";
import email from "../img/email.png";

export default function Footer() {
  return (
    <footer className="App__footer">
      <div className="App__footer--love">
        <p>Made with love by Mike</p>
      </div>
      <div className="App__footer--contact">
        <a className="App__footer--contact--phone" href="tel:+49176567360">
          <img src={phone} alt="phone-call"></img>
        </a>
        <a
          className="App__footer--contact--email"
          href="mailto:mangasarov@hotmail.de"
        >
          <img src={email} alt="email"></img>
        </a>
      </div>
    </footer>
  );
}
