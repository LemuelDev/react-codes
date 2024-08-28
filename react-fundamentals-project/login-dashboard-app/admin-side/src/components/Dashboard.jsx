import PropTypes from 'prop-types'
import { useState } from 'react'
import LoginComponent from './LoginComponent'

const Dashboard = () => {

  const [close, setClose] = useState(true)

  const handleClose = () => {
    if (close) {
      setClose(false)
    }
  }

  const dashboard = (
      <div>
         <div className="sidebar">
            <h4>Welcome, Admin</h4>
            <ul>
              <li>
                <a href="">Users</a>
              </li>
              <li>
                <a href="">Online Users</a>
              </li>
              <li>
                <a href="">Accounts</a>
              </li>
              <li>
                <a href="">Terms and Aggreement</a>
              </li>
              <li>
                <a href="">Settings</a>
              </li>
              <button className="btn-out" onClick={handleClose}>
                Logout
              </button>
            </ul>
         </div>
      </div>
    )

  return (
    <div>
        {close ? dashboard : <LoginComponent/>}
    </div>
  )
}

Dashboard.proptypes = {
  valid: PropTypes.func.isRequired
}


export default Dashboard