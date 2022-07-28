import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Quiz from './components/Quiz/Quiz';
import Rank from './components/Rank/Rank';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/take-quiz' element={<Quiz />} />
        <Route path='/quiz/result/:score' element={<Rank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
