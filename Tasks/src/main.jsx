import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Sum from './Sum'
import Sum2 from './Sum2'
import Counter from './Counter'
import Signup from './Signup'
// import Login from './Login'
import Login from './Login'
import UpdateProfile from './UpdateProfile'
// Resolved casing conflict for Login.jsx                                                                                                                                                                                                                                                                                                                                                                                                                                   
import Profile from './Profile'
// import Home from './main'
import UsersAPI from './UsersList'
import Movie from './movie'
import News from './news'
import Theme from './Theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        {/* <Link to="/">Home</Link> |{" "} */}
        <Link to="/Counter">Counter</Link> |{" "}
        <Link to="/Sum">Sum with Arrow Function</Link> |{" "}
        <Link to="/Sum2">Sum with Dynamic Textbox</Link> |{" "}
        <Link to="/Signup">Signup</Link> |{" "}
        <Link to="/Login">Login</Link> |{" "}
        <Link to="/UsersAPI">Users API</Link> |{" "}
        <Link to="/Movie">Movie</Link> |{" "}
        <Link to="/News">News</Link> |{" "}
        <Link to="/Theme">Theme</Link> |{" "}
        {/* <Link to="/Profile">Profile</Link> |{" "} */}
      </nav>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/Counter' element={<Counter />} />
        <Route path='/Sum' element={<Sum />} />
        <Route path='/Sum2' element={<Sum2 />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/UpdateProfile' element={<UpdateProfile />} />
        <Route path='/UsersAPI' element={<UsersAPI />} />
        <Route path='/Movie' element={<Movie />} />
        <Route path='/News' element={<News />} />
        <Route path='/Theme' element={<Theme />} />
      </Routes>
    </BrowserRouter>
  </StrictMode >
)
