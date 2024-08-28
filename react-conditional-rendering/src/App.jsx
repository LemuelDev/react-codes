import { useState } from 'react'


function App() {

  const [isClick, setIsClick] = useState(false)

  const handleLogIn = () => {
      setIsClick(!isClick)
  } 

  return (
    <>
      <div style={{display: 'grid', placeContent: 'center', minHeight: '100vh'}}>
          <button onClick={handleLogIn} style={{backgroundColor: 'lightgreen', fontSize: '1.5rem', border: 'none', padding: '1rem', borderRadius: '5px'}}> 
          {isClick ? 'Log Out' : 'Log In'} </button>
          {isClick ? <p style={{fontFamily: 'cursive' , paddingTop: '2rem'}}> Welcome Back, Lem_Dev</p> : ''}
      </div>
    </>
  )
}

export default App
