import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import CounterPage from "./page/CounterPage";
import PokemonsPage from "./page/PokemonPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
