import style from './Styles.module.css'
import PropTypes from 'prop-types';

const MovieList = ({movies}) => {

    MovieList.propTypes = {
        movies: PropTypes.arrayOf(
          PropTypes.shape({
            Poster: PropTypes.string,
            Title: PropTypes.string,
            Year: PropTypes.string,
            Plot: PropTypes.string,
          })
        ).isRequired,
      };

  return (
    <div className={style.container}>
        {movies.map((item, index) => {
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
  )
}

export default MovieList