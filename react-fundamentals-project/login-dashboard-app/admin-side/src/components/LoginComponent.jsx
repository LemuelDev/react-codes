import { useState } from "react"
import Dashboard from "./Dashboard"

const LoginComponent = () => {


    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [valid , setValid] = useState(false)
    const handleLogIn = (e) => {
        e.preventDefault();
       if (userName && password){
        if (userName === 'admin123' && password === 'adminpass'){
            setValid(true)
        }else {
            setError('Incorrect username or password.')
        }
        }else {
            setError('Fill out all the field')
        }
    }

    const loginAdmin = (
         <div className="wrapper">
             <h3>Login Admin</h3>
         <form onSubmit={handleLogIn} className="form-wrapper">
            <input 
             type="text"
             placeholder="Enter Username.."
             value={userName}
             name="username"
             onChange={(event) => setUsername(event.target.value)}
             />
              <input 
             type="text"
             placeholder="Enter Password.."
             value={password}
             name="password"
             onChange={(event) => setPassword(event.target.value)}
             />
       
             <button className="btn-submit" type="submit">
                 Login
             </button>
             {error ? <p className="errors">{error}</p> : null}
             </form>
         </div>
        )

  return (
    <div>
        
            {valid ? <Dashboard valid={valid}/> : 
                loginAdmin
            }
    </div>
  )
}

export default LoginComponent