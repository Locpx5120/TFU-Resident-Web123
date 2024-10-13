import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { routeArray } from "./constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/*"
          element={
            <>
              <Sidebar />
              <div className="main-content">
                <Header />
                <Routes>
                  {routeArray.map((item) => (
                    <Route key={item.route} path={item.route} element={item.component} />
                  ))}
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
