import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prevState => prevState + 1)
  }
  const handleDecrement = () => {
    setCount(prevState => prevState - 1)
  }

  return (
    <div style={{maxWidth: '500px', margin: '0 auto', display: 'grid', placeContent: 'center', position: 'absolute', top: '10px', left: '10px'}}>
        {count >= 0 ? <h1 style={{color: 'green'}}>Count {count}</h1> : <h1 style={{color: 'red'}}>Count {count}</h1>}
        <button className='btn btn-success' onClick={handleIncrement}>Increment</button>
        <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button>
        <hr />
        <br />
        {count >= 0 ? <h3 style={{color: 'green'}}>Dynamic Styling</h3>: <h3 style={{color: 'red'}}>Dynamic Styling</h3>}
    </div>
  )
}

export default App
