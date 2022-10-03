import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardUi from "./views/DashboardUi";
import "./styles/style.scss";

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<DashboardUi />} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
