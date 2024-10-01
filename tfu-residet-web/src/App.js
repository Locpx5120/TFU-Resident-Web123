import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path="/*"
          element={
            <>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
