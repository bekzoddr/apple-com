import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { HEROS } from "./static/Index";
import Banners from "./components/banners/Banners";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";
function App() {
  let heros = HEROS?.map((el) => <Hero key={el.id} {...el} />);

  return (
    <div className="App">
      <Navbar />
      <Loading />
      {heros}
      <Banners />
      <Footer />
    </div>
  );
}

export default App;
