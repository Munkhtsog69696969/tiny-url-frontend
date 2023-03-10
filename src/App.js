import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom" 
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Home } from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path='/login' index element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;