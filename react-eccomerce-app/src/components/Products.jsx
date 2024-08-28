
import { useState } from 'react';
import style from './StylesComponents.module.css'
import PropTypes from 'prop-types';
import Cartcomponent from './Cartcomponent';
const Products = ({products}) => {

  Products.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  const [allProducts, setAllProducts] = useState([...products])
  const [filterProducts, setFilterProducts] = useState([...products])
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1)

  const handleAllProducts = () => {
      setAllProducts([...filterProducts])
  }

  const handleMen = () => {
      const filtered = filterProducts.filter((item) => item.gender === 'male')
      setAllProducts(filtered)
  }
  const handleWomen = () => {
    const filtered = filterProducts.filter((item) => item.gender === 'female')
      setAllProducts(filtered)
}

  const handleTshirt = () => {
    const filtered = filterProducts.filter((item) => item.item === 'Jacket')
    setAllProducts(filtered)
  } 

  const handleShoes = () => {
    const filtered = filterProducts.filter((item) => item.item === 'Shoes')
    setAllProducts(filtered)
  }

  const handleJewelry = () => {
    const filtered = filterProducts.filter(item => item.item === 'Jewelry')
    setAllProducts(filtered)
  }

  const handleCart = (item) => {
      setCart([...cart, item])
  }




  return (
    <>
    <h3 className={style['product-title']}> Products </h3>
    <div className={style.choices}>
      <button onClick={handleAllProducts}>All Products</button>
      <button onClick={handleMen}>Men</button>
      <button onClick={handleWomen}>Women</button>
      <button onClick={handleTshirt}>Jacket</button>
      <button onClick={handleShoes}>Shoes</button>
      <button onClick={handleJewelry}>Jewelries</button>
    </div>
    <div className={style['product-section']}>
        {allProducts.map((item) => {
        return (
          <div className={style['product-item']} key={item.id}>
          <div className={style['product-img']}>
              <img src={item.img} alt="" className={style.productImg} />
          </div>
          <div className={style.description}>
              <h4 className={style['description-title']}>
                  {item.name}
              </h4>
              <p className={style.item}>{item.item}</p>
              <h6 className={style.price}>
                  {item.price}
              </h6>
              <button className={style.cartBtn} onClick={() => handleCart(item)}>Add to Cart</button>
          </div>
        </div>
        )
        })}
    </div>
      

      <Cartcomponent cart={cart} quantity={quantity}/>
      
    


    </>
   
  )
}

export default Products