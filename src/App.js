import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RouteComponent from './RouteComponent';

function App() {

  
  return (
    <BrowserRouter>
    <Routes>


    <Route path="/Gender" element={<RouteComponent element={<>Gender Page</>}/>} exact />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
