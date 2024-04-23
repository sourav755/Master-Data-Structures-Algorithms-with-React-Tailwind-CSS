import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="box-border px-4 py-5 overflow-x-hidden">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
