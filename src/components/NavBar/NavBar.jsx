import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <header className="App-header">
          Logged in as {user.name}
          <nav>
            
              <NavLink to='/'>Chinchilla List</NavLink>
              <NavLink to='/add'>Add Chinchilla</NavLink>
              <NavLink to='/' onClick={handleLogout}>Log Out</NavLink>
              <NavLink to='/changePassword'>Change Password</NavLink>
            </nav>
        </header>
        :
        <header className="App-header">
          Log in now bro
          <nav>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </nav>
        </header>
      }
    </>
  )
}

export default NavBar
