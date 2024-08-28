import { useContext, useState } from "react"
import userContext from "../context/userContext"
import Mainpage from "./Mainpage"
import '../styles.css'

const Userauth = () => {
    const { 
            logError, 
            handleLogIn, 
            handleSignUp,
            show } = useContext(userContext)

    const [isLogin, setIsLogin] = useState(false)
    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')
    

    const handleLoginUser = (e,username, password) =>{
        handleLogIn(e,username, password)
        setIsLogin(true)
        setUserName('')
        setPassword('')
    }

    const handleSignUpUser = (e,username, password) => {
        handleSignUp(e,username,password)   
        
    }
    const loginUser = (
        <div className="authentic">
        <h1>Login</h1>
        <form onSubmit={(e) => handleLoginUser(e,userName, passWord)}>
            <input 
            type="text"
            placeholder="Enter Username.."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
             />
            <input 
            type="text"
            placeholder="Enter Password.." 
            value={passWord}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-login" type="submit">
                Login
            </button>
            {logError ? <p className="errors">{logError}</p> : null}
        </form>
        <p className="user-auth">
            Dont have any account yet? <span onClick={() => setIsLogin(false)}> Sign Up</span>
        </p>
    </div>     
    )

    const signUp = (
        <div className="authentic">
        <h1>Sign Up</h1>
        <form onSubmit={(e) => handleSignUpUser(e,userName, passWord)}>
            <input 
            type="text"
            placeholder="Enter Username.."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
             />
            <input 
            type="text"
            placeholder="Enter Password.." 
            value={passWord}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-login" type="submit">
                Sign Up
            </button>
            {logError ? <p className="errors">{logError}</p> : null}
        </form>
        <p className="user-auth">
            Already have an account? <span onClick={() => setIsLogin(true)}> Login</span>
        </p> 
      </div> 
        )

    

  return (
    <>
        {show ? <Mainpage/> : ( isLogin ? loginUser : signUp)}
    </>
  )
}

export default Userauth