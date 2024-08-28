import { useState } from 'react'
import '../styles.css'
import Userauth from './Userauth'
import Adminpage from './Adminpage'


const Adminauth = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [logError, setLogError] = useState('')
  const [isSucces, setIsSucces] = useState(false)
  const [show, setShow] = useState(false)
  const handleAdmin = (e) => {
      e.preventDefault()
      if (username && password) {
        if (username === 'admin2023' && password === 'pass2023'){
              setIsSucces(true)
              setUsername('')
              setPassword('')
        }else {
          setLogError('Login failed. Try again.')
        }
      }else {
        setLogError('Please input all the fields.')
        setIsSucces(false)
      }
  }

  const adminUI = (
    <div className="authentic">
    <h1>Welcome Back, ADMIN !</h1>
    <form onSubmit={handleAdmin}>
        <input 
        type="text"
        placeholder="Enter Username.."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
         />
        <input 
        type="text"
        placeholder="Enter Password.." 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-login" type="submit">
            Login
        </button>
        {logError ? <p className="errors">{logError}</p> : null}
    </form>
      <p className="user-auth">
        Sign up as User? <span onClick={() => setShow(true)}>Sign up here</span>
      </p>
</div>
    )

  return (
    <div>
        {show ? <Userauth/> : (isSucces ? <Adminpage/> : adminUI)}
    </div>
  )
}

export default Adminauth