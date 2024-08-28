
import { useState } from 'react'
import style from './StylesComponents.module.css'
import PropTypes from 'prop-types'


const Cartcomponent = ({cart, quantity}) => {

    const [products, setProducts] = useState(quantity) 

    const handleIncrement = (itemId) => {
       
    }

    const handleDecrement = (itemId) => {
       
    }

  return (
    <div className={style.cartSection}>
        <h4> Your cart</h4>
        <div className={style.cartList}>
        {cart.map((item) => {
        return (
           <div className={style.card} key={item.id}>
                <div className={style.imageSec}>
                    <img src={item.img} alt="" className={style.cartImg}/>
                </div>
                <div className={style.nameSec}>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                </div>
                <div className={style.quantitySec}>
                    <h4 onClick={() => handleIncrement(item.id)}><strong>+</strong></h4>
                    <p>{products}</p>
                    <h4 onClick={() => handleDecrement(item.id)}><strong>-</strong></h4>
                </div>
           </div> 
        )
        })}
        </div>
    </div>
  )
}


Cartcomponent.propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
    ).isRequired
  };
  

export default Cartcomponent