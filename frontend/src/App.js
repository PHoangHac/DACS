import './App.scss';
import Homepage from './containers/homepage';
import ListProduct from './components/listproduct';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
        <>
        <Header />
          <Routes>
             <Route path='/' exact element={<Homepage />} />
             <Route path='/Features' element={<ListProduct />}/>
             <Route path='/Login' element={<Login />}/>
             <Route path='/Register' element={<Register />}/>
          </Routes>
        </>
  );
}

export default App;
