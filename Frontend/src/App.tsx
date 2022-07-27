import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './components/Home';
import Test from './components/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
