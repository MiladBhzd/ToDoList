import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header entete={"hey"} />
      <MainContent />
      <Footer />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
