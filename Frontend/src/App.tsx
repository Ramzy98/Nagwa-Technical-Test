import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Test from './components/Test/Test';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
