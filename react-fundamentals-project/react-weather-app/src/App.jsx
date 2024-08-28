import { useRef, useState } from 'react'
import './App.css'

const App = () => {

  const inputRef = useRef()
  const [city, setCity] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const [errorMsg , setErrorMsg] = useState(null)

  const handleWeather = async (event) => {
    event.preventDefault()
    const apiKey = 'b60534d6e4d4367cdc8ea944c5992f88'
    const cityName = inputRef.current.value
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city name.');
      }
      const data = await response.json();
      if (data.cod !== 200) {
        throw new Error(data.message || 'An error occurred while fetching data.');
   
      }
        setCity([data]);
        setIsSearch(!isSearch);
        setErrorMsg(null); // Clear any previous error message
     
    } catch (error) {
      // Handle errors gracefully
      console.error('Error:', error);
      setCity([])
      setErrorMsg(error.message || 'An error occurred.');
      // Optionally, you can clear the city data or perform other error-related actions
    }
  }
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based (0-11), so add 1
  const day = currentDate.getDate();

  return (
    <div className="wrapper">
       <div className='wrapper-content'>
       <h4>Weather App</h4>
        <div className="input-section">
          <form className="form" onSubmit={handleWeather}>
            <input 
            type="text" 
            className="weather-input"
            placeholder="Enter a country..." 
            ref={inputRef} />
            <button type="submit" className='search-btn'>Search</button>
            {isSearch && inputRef.value === ''? <p style={{color: 'red'}} className='error-msg'>Please search a place..</p> : null}
          </form>
          {errorMsg && (
            <p style={{ color: 'red' }}>{errorMsg}</p>
          )}
          {  city.length !== 0 && inputRef.current.value !== ''? city.map((item) => {
          return (
          <div className="render-section" key={item.id}>
              <h5>{item.name}</h5>
              <p>{month}/{day}/{year}</p>
              <h2>{(item.main.temp - 273.15).toFixed(2)}°C</h2>
              <h3>{item.weather[0].main}</h3>
          </div>
            )
          }) : 
             <div className="render-section">
                <h6>Search some city...</h6>
            </div>}
        </div>
       </div>
    </div>
  )
}

export default App