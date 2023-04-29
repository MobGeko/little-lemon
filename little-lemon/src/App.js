import './Header.js';
import './Nav.js';
import './Main.js';
import './Footer.js';
import './App.css';

function App() {
  return (
    <>
      <Header>
        <img src="./logo.jpeg" alt="Little-Lemon-Logo" />
        <Nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/Reservation">Reservation</a></li>
            <li><a href="/Order-Online">Order Online</a></li>
            <li><a href="/Login">Login</a></li>
          </ul>
        </Nav>
      </Header>
      <Main>
      </Main>
      <Footer>
        <Nav>
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/Reservation">Reservation</a></li>
            <li><a href="/Order-Online">Order Online</a></li>
            <li><a href="/Login">Login</a></li>
          </ul>
        </Nav>
      </Footer>ù
    </>
  );
}

export default App;
