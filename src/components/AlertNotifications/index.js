import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdWarning, MdInfo} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import Notification from '../Notification'

const AlertNotifications = () => (
  <>
    <h1>Alert Notifications</h1>

    <Notification>
      <div className="notification-item-container">
        <AiFillCheckCircle />
        <div className="content-card">
          <h1>Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="notification-item-container">
        <RiErrorWarningFill />
        <div className="content-card">
          <h1>Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="notification-item-container">
        <MdWarning />
        <div className="content-card">
          <h1>Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="notification-item-container">
        <MdInfo />
        <div className="content-card">
          <h1>Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  </>
)

export default AlertNotifications
