import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/sections/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
          <div className="Pages">
            <Routes>
              <Route 
                path='/'
                element={<Home />}
              />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
