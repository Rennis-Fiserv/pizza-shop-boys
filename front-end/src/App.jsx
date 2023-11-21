import './App.css'
import 'normalize.css'
import Routes from './routes/Routes'
import { UserProvider } from './contexts/UserContext'

function App() {

  return (
    <>
      <UserProvider>
      <Routes/>
      </UserProvider>
    </>
  )
}

export default App
