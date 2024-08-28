import { useState } from "react"
import './Accordion.css'

const Accordion = ({ question }) => {

    const [isClick, setIsClick] = useState(false)
    const {title, id, info} = question

    const handleClick = () => { 
        setIsClick(!isClick)
    }

  return (
    <div>
        
        <div className="accordion" key={id}>
            <div className="accordion-header">
                <h4>{title}</h4>
                {isClick ? <button onClick={handleClick} className="acc-btn"> <strong> - </strong></button> : <button onClick={handleClick} className="acc-btn"> <strong> + </strong></button>}
            </div>
            <div className="accordion-body">
                {isClick ? <p className="accordion-info">{info}</p> : ''}
            </div>
        </div>

    </div>
  )
}

export default Accordion