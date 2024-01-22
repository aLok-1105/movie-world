import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import './style/style.css'
import Show from './Pages/Show';
import './style/navbar.css'



function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Home />
        
      }>
      </Route>

      <Route path='/show/:id' element={
        <Show/>
      }>

      </Route>

      <Route path='*' element={
        <>This is 404 page</>
      }>
        
      </Route>
    </Routes>
  );
}

export default App;
