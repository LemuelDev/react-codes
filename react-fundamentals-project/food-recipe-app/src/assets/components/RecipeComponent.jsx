import PropTypes from 'prop-types'

import { useState } from "react"


const RecipeComponent = ({item}) => {

  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true)
  }
  const handleClose= () => {
    setIsClick(false)
  }

  return (
    <>
    <div className='list-result'>
        <img src={item.strMealThumb} alt="" />
        <div className="description">
            <h4>{item.strMeal}</h4>
            <button className='btn-browse' onClick={handleClick}>Browse</button>
        </div>
    </div>

    {/* show modal once it is true */}
    {isClick && <div className="modal">
        <img src={item.strMealThumb} alt="" className="modal-img"/>
        <div className="modal-content">
          <h4>{item.strMeal}</h4>
          <button className="btn-close" onClick={handleClose}>
              Close
          </button>
        </div>
    </div>}

    </>

  )
}

RecipeComponent.propTypes = {
    item: PropTypes.shape({
      strMeal: PropTypes.string.isRequired,
      strMealThumb:  PropTypes.string.isRequired,
      idMeal: PropTypes.string.isRequired,
    }).isRequired

};

export default RecipeComponent