import { useState } from "react"
import style from './FormStyles.module.css'

const Form = () => {

  const [isClick, SetIsClick] = useState(false)
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target[1].value || !event.target[0].value){
      alert('PLease input all the fields')
    }else {
      const completeName = event.target[0].value
      setName(completeName)
      SetIsClick(!isClick)
      event.target[1].value = ''
      event.target[0].value = ''
    }

  }
  return (
    <form className={style.main} onSubmit={handleSubmit}>
        <h4> Form Handling</h4>
        <label htmlFor="fullname" className="form-label" >Your Name: </label>
        <input type="text" name="completeName" placeholder="Enter Name" id="fullname" className="form-control"/>
        <label htmlFor="fullname" className="form-label" >Your Email: </label>
        <input type="email" name="emailInput" placeholder="Enter Email" className="form-control mb-10px"/>
        <button className={style.submitBtn}type="submit">Submit</button>
         { isClick ? <p className={style.results}>Hello There {name} <br /> Sign up Success </p> : <p></p>}
        
      </form>
  )
}

export default Form