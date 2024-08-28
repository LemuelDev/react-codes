import { useEffect, useRef, useState } from "react"
import style from './Styles.module.css'
import MovieList from "./MovieList"

const SearchBar = () => {

  const [movies, setMovies] = useState([])
  const [firstMovies, setFirstMovie] = useState(null);
  const movieRef = useRef()
  const key = '9e3f20be'

  const fetchMovie = async () => {

    const movieName = movieRef.current.value
    const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
      
    try {
      const response = await fetch(url);
      const result =  await response.json();
      if (result && result.Title) {
        setMovies([result]);
        setFirstMovie([])
      } else {
        // No search results found
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const fetchFirstMovie = async () => {
    const url = `http://www.omdbapi.com/?s=action&apikey=9e3f20be`;
      
    try {
      const response = await fetch(url);
      const result =  await response.json();
      if (result && result.Search && result.Search.length > 0) {
        // Set the first movie from the search results
        setFirstMovie(result.Search.slice(0, 10));
      } else {
        // No search results found for the first movie
        setFirstMovie(null);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchFirstMovie()
  }, [])
  

  return (
    <>
      <div className={style['card-wrapper']}>
      <div className={style['title-section']}>
          <h4>Mowbie App</h4>
          <p>Movie Insights, Just for You.</p>
      </div>
      <div className={style['input-section']}>
          <input type="text" className={style.field}placeholder="Enter a Movie..." ref={movieRef}/>
          <button onClick={fetchMovie}>Search Movie</button>
      </div>
      
    </div>

    {firstMovies ? (
       <div className={style.container}>
          {firstMovies.map((item,index) => {
          return(
            <div className={style.list} key={index}>
              <div className={style['img-section']}>
                  <img src={item.Poster} alt={item.Title} className={style['img-movie']} />
              </div>
              <div className={style['movie-info']}>
                  <label>{item.Title}</label>
                  <h5>Year: {item.Year} </h5>
                  <p>Plot: {item.Plot} </p>
              </div>
            </div>
          )
          })}
       </div>
      ) : null}

  
    
    <MovieList movies={movies}/>
    </>
  )
}
export default SearchBar