import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Sidenav from "./Sidenav";
import Mainc from "./Mainc";

function App() {
  return (
    <div className="App">
      <Header title="header" />
      <div class="bet">
        <Sidenav title="sidenav" />
        <Mainc title="main content" />
      </div>
      <Footer title="footer" />

    </div>
  );
}

export default App;
