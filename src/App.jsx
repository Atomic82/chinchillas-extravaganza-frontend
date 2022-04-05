import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as chinchillaService from './services/chinchillasService'
import AddChinchilla from './pages/AddChinchilla/AddChinchilla'
import ChinchillaList from './pages/ChinchillaList/ChinchillaList'
import EditChinchilla from './pages/EditChinchilla/EditChinchilla'


// const App = () => {
//   const [user, setUser] = useState(authService.getUser())
//   const [profiles, setProfiles] = useState([])
//   const navigate = useNavigate()

function App() {
  const [chinchillas, setChinchillas] = useState([])
  const navigate = useNavigate()
  const [user, setUser] = useState(null)


  useEffect(() => {
    if (user) {
      chinchillaService.getAll()
        .then(allChinchillas => setChinchillas(allChinchillas))
    }
  }, [user])

  const handleAddChinchilla = async newChinchillaData => {
    const newChinchilla = await chinchillaService.create(newChinchillaData)
    setChinchillas([...chinchillas, newChinchilla])
    navigate('/')
  }

  const handleDeleteChinchilla = id => {
    chinchillaService.deleteOne(id)
      .then(deletedChinchilla => setChinchillas(chinchillas.filter(chinchilla => chinchilla._id !== deletedChinchilla._id)))
  }

  const handleUpdateChinchilla = updatedChinchillaData => {
    chinchillaService.update(updatedChinchillaData)
      .then(updatedChinchilla => {
        const newChinchillasArray = chinchillas.map(chinchilla => chinchilla._id === updatedChinchilla._id ? updatedChinchilla : chinchilla)
        setChinchillas(newChinchillasArray)
        navigate('/')
      })
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }


  return (
    <div className="App">
      <NavBar user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route
            path='/add'
            element={
              <AddChinchilla
                handleAddChinchilla={handleAddChinchilla}
              />
            }
          />
          <Route
            path='/'
            element={
              user ?
              <ChinchillaList
                handleDeleteChinchilla={handleDeleteChinchilla}
                chinchillas={chinchillas}
                user={user}
              />
              :
              <Navigate to='/login' />
            }
          />
          <Route
            path='/edit'
            element={
              <EditChinchilla
                handleUpdateChinchilla={handleUpdateChinchilla}
                chinchillas={chinchillas}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/login"
            element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/changePassword"
            element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
    </div>
  )
}



export default App
