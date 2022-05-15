import './App.scss';
import Homepage from './containers/homepage';
import ListProduct from './components/product/listproduct';
import Header from './components/header';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Testdata from '../src/components/testdata/testdata';
import {
  Routes,
  Route,
} from "react-router-dom";
import CreatDT from './components/testdata/CreateData';
import Post from './components/testdata/Post';

function App() {
  return (
        <>
        <Header />

          <Routes>
             <Route path='/' exact element={<Homepage />} />
             <Route path='/Features' element={<ListProduct />}/>
             <Route path='/Login' element={<Login />}/>
             <Route path='/Register' element={<Register />}/>
             <Route path='/displaydata' element={<Testdata />} />
             <Route path='/createdata' element={<CreatDT />} />
             <Route path='/post/:id' element={<Post />} />
          </Routes>

          {/* <Footer /> */}
        </>
  );
}

export default App;
