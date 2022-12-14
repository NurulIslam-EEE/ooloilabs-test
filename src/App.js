import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./components/common/Navigation";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
