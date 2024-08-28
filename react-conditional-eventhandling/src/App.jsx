// Conditional Rendering..

import { useState } from "react"


function App() {

  const[isClick, setIsClick] = useState(false)

  const text = isClick ? 'Off' : 'On'

  const handleClick = () => {
    setIsClick(!isClick)
  }
  return (
    <>
    {isClick ? <button className="btn btn-danger" onClick={handleClick}>{text}</button> 
    : 
    <button className="btn btn-primary" onClick={handleClick}>{text}</button>}
    </>
  )
}

export default App
