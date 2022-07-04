import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/Calculator';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
