import './app.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'

function App() {
  const user = true;
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home/> : <Navigate to='/register'/>}/>
          <Route exact path="/register" element={!user ? <Register/> : <Navigate to='/'/>}/>
          <Route exact path="/login" element={!user ? <Login/> : <Navigate to='/'/>}/>
          { user && (
            <>
            <Route path="/movies" element={<Home type='Peliculas'/>}/>
            <Route path="/series" element={<Home type='Series'/>}/>
            <Route path="/watch" element={<Watch/>}/>
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
