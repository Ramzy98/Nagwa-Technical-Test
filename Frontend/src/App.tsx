import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/take-quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
