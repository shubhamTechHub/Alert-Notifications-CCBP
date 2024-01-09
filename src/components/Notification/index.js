import './index.css'

const Notification = props => {
  const {children} = props
  console.log(props)
  return (
    <div className="notification-container">
      <div className="notification-item-container">
        <div className="notification-icon-card">{children[0]}</div>
        <div className="content-card">
          <p>{children[1]}</p>
          <p>{children[3]}</p>
        </div>
        <div className="delete-icon-card">{children[4]}</div>
      </div>
    </div>
  )
}

export default Notification
