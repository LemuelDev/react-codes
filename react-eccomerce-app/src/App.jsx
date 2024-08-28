import HeroComponent from "./components/HeroComponent"
import Navbar from "./components/Navbar"
import Products from "./components/Products"


function App() {
  let products = [
    { 
      quantity: 1,
      gender: 'female',
      id: 0,
      item: 'Skirt',
      name: 'Penshoppe Tees',
      price: '550.00',
      img: '../src/images/products/clothes-1.jpg'
    },
    {
      quantity: 1,
      gender: 'female',
      id: 1,
      item: 'Skirt',
      name: 'Penshoppe Tees',
      price: '550.00',
      img: '../src/images/products/clothes-2.jpg'
    },
    {
      quantity: 1,
      gender: 'female',
      id: 2,
      item: 'Skirt',
      name: 'Penshoppe Tees',
      price: '550.00',
      img: '../src/images/products/clothes-3.jpg'
    },
    { 
      quantity: 1,
      gender: 'female',
      id: 3,
      item: 'Skirt',
      name: 'Penshoppe Tees',
      price: '550.00',
      img: '../src/images/products/clothes-4.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 4,
      item: 'Jacket',
      name: 'Penshoppe Jackets',
      price: '550.00',
      img: '../src/images/products/jacket-1.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 5,
      item: 'Jacket',
      name: 'Penshoppe Jackets',
      price: '550.00',
      img: '../src/images/products/jacket-2.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 6,
      item: 'Jacket',
      name: 'Penshoppe Jackets',
      price: '550.00',
      img: '../src/images/products/jacket-3.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 7,
      item: 'Jacket',
      name: 'Penshoppe Jackets',
      price: '550.00',
      img: '../src/images/products/jacket-4.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 8,
      item: 'Jacket',
      name: 'Penshoppe Jackets',
      price: '550.00',
      img: '../src/images/products/jacket-5.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 9,
      item: 'Jacket',
      name: 'Penshoppe Jackets',
      price: '550.00',
      img: '../src/images/products/jacket-6.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 17,
      item: 'Jacket',
      name: 'Penshoppe Jackets',
      price: '550.00',
      img: '../src/images/products/shirt-1.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 18,
      item: 'Jacket',
      name: 'Penshoppe Jackets',
      price: '550.00',
      img: '../src/images/products/shirt-2.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 10,
      item: 'Watch',
      name: 'Penshoppe Watch',
      price: '550.00',
      img: '../src/images/products/watch-1.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 11,
      item: 'Watch',
      name: 'Penshoppe Watch',
      price: '550.00',
      img: '../src/images/products/watch-2.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 12,
      item: 'Watch',
      name: 'Penshoppe Watch',
      price: '550.00',
      img: '../src/images/products/watch-3.jpg'
    },
    {
      quantity: 1,
      gender: 'male',
      id: 13,
      item: 'Watch',
      name: 'Penshoppe Watch',
      price: '550.00',
      img: '../src/images/products/watch-4.jpg'
    },
    {
      quantity: 1,
      gender: 'female',
      id: 14,
      item: 'Jewelry',
      name: 'Prada',
      price: '550.00',
      img: '../src/images/products/jewellery-1.jpg'
    },
    {
      quantity: 1,
      gender: 'female',
      id: 15,
      item: 'Jewelry',
      name: 'Prada',
      price: '550.00',
      img: '../src/images/products/jewellery-2.jpg'
    },
    {
      quantity: 1,
      gender: 'female',
      id: 16,
      item: 'Jewelry',
      name: 'Prada',
      price: '550.00',
      img: '../src/images/products/jewellery-3.jpg'
    },
    {
      quantity: 1,
      id: 19,
      item: 'Shoes',
      name: 'Penshoppe Shoes',
      price: '550.00',
      img: '../src/images/products/shoe-1.jpg'
    },
    {
      quantity: 1,
      id: 20,
      item: 'Shoes',
      name: 'Penshoppe Shoes',
      price: '550.00',
      img: '../src/images/products/shoe-2.jpg'
    },
    {
      quantity: 1,
      id: 21,
      item: 'Shoes',
      name: 'Penshoppe Shoes',
      price: '550.00',
      img: '../src/images/products/shoe-3.jpg'
    },
    {
      quantity: 1,
      id: 22,
      item: 'Shoes',
      name: 'Penshoppe Shoes',
      price: '550.00',
      img: '../src/images/products/shoe-5.jpg'
    },
    {
      quantity: 1,
      id: 23,
      item: 'Shoes',
      name: 'Nike Shoes',
      price: '550.00',
      img: '../src/images/products/sports-1.jpg'
    },
    {
      quantity: 1,
      id: 24,
      item: 'Shoes',
      name: 'Nike Shoes',
      price: '550.00',
      img: '../src/images/products/sports-2.jpg'
    },
    {
      quantity: 1,
      id: 25,
      item: 'Shoes',
      name: 'Nike Shoes',
      price: '550.00',
      img: '../src/images/products/sports-3.jpg'
    },
    {
      quantity: 1,
      id: 26,
      item: 'Shoes',
      name: 'Nike Shoes',
      price: '550.00',
      img: '../src/images/products/sports-4.jpg'
    },
    {
      quantity: 1,
      id: 27,
      item: 'Shoes',
      name: 'Nike Shoes',
      price: '550.00',
      img: '../src/images/products/sports-5.jpg'
    },
    {
      quantity: 1,
      id: 28,
      item: 'Shoes',
      name: 'Nike Shoes',
      price: '550.00',
      img: '../src/images/products/sports-6.jpg'
    },
    

  ]

  return (
    <>
      <div className="hero-section">
      <Navbar/>
      <HeroComponent/>
      <Products products = {products}/>
      
      </div>
      
    </>
  )
}

export default App
