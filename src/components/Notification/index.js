import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(props)
  return (
    <div className="notification-container">
      {children}
      <div className="delete-icon-card">
        <GrFormClose />
      </div>
    </div>
  )
}

export default Notification
