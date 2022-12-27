import carmen from "./carmen.svg";
import Sidebar from "./Sidebar";
import "./sass/App.css";

function App() {
  return (
    <div>
      <header className="flex">
        <img src={carmen} alt="Carmen Lopez" className="logo" />
        <h3>.react | sass.</h3>
      </header>
      <main>
        <Sidebar />
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}

export default App;
