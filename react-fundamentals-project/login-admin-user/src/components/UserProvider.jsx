import { useState, useEffect } from "react"
import userContext from '../context/userContext'

const UserProvider = ({children}) => {

    const [users, setUser] = useState (localStorage.getItem('userKey') || [])
    const [logError, setLogError] = useState('')
    const [isLog, setIsLog] = useState(false)
    const [show, setShow] = useState(false)

    const handleSignUp = (e, username, password) => {
        e.preventDefault(); // Prevent the default form submission
        if (username && password){
            setUser((prevusers) => [...prevusers, { username: username, password: password }]);
            localStorage.getItem('userKey', { username: username, password: password })
            setIsLog(true);
            setLogError('');
            setShow(true)
            console.log(users);
        }else {
            setLogError('Please input all the fields')
        }
    }
    
    const handleLogIn = (e, username, password) => {
        e.preventDefault(); // Prevent the default form submission
        if (username && password) {
            const userFound = users.filter(user => username === user.username && password === user.password);
            if (userFound) {
                setIsLog(true);
                setLogError('');
                setShow(true)
            } else {
                setLogError('Login Error. Try Again.');
            }
        } else {
            setLogError('Please input all the fields.');
        }
    }
  return (
        <userContext.Provider value={{users , logError, handleSignUp, handleLogIn, isLog, show}}>
            {children}
        </userContext.Provider>

        
  )
}


export default UserProvider