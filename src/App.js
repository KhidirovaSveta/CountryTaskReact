import { Route, Routes } from "react-router-dom";
import CountriesDetail from "./components/countries-detail";
import HomePage from "./components/home-page";
import Header from "./layouts/header";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/countries-detail/:name"
            element={<CountriesDetail />}
          ></Route>
        </Routes>
    </div>
  );
}

export default App;
