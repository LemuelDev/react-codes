import { useState } from "react"


function App() {
  
  const [temperature, setTemperature] = useState(35)

  const handleIncrement = () => {
    setTemperature(prev => prev + 1)
  }
  const handleDecrement = () => {
    setTemperature(prev => prev - 1)
  }

  return (
    <div style={{
    display: 'grid', 
    placeContent: 'center', 
    minHeight: '100vh', 
    textAlign: 'center',
    maxWidth: '500px',
    margin: '0 auto'
    }}>

      <h3>Temperature Control App</h3>
      <p>Note that if the temperature is equal or over 39 degree, the text will be red/hot else blue/cold</p>

      { temperature >= 39 ? <h5 style={{color: 'red'}}>{temperature} degree</h5> : <h5 style={{color: 'blue'}}>{temperature} degree</h5>}
      <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
      <button className="btn btn-danger" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
