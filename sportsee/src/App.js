import { Routes, Route } from "react-router-dom";
import DashboardUi from "./views/DashboardUi";
import "./styles/style.scss";
import Error404Ui from "./views/Error404Ui/Error404Ui";
import Home from "./views/Home/Home";

/**
 * @component App
 * @returns App component with the routing of this app 
 */
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<DashboardUi />} path="/user/:id" />
        <Route element={<Error404Ui />} path="/user/error" />
      </Routes>
    </div>
  );
}

export default App;
