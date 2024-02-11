import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Login from './components/Login.jsx';
import SignUp from './components/Signup.jsx';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
          </Routes>
      </Router>
  );
}

export default App;
