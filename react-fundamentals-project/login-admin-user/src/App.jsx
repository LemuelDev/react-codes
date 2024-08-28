
import UserProvider from "./components/UserProvider"
import { BrowserRouter as Router} from "react-router-dom"
import AppRoutes from "./Routes"
const App = () => {

  return (
    <div>
      <Router>
        <UserProvider>
            <AppRoutes/>
        </UserProvider> 
      </Router>
    </div>
  )
}

export default App