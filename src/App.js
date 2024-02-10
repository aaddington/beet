import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <body>
      {Header()}
      {Home()}
      {Footer()}
    </body>
  );
}

export default App;
