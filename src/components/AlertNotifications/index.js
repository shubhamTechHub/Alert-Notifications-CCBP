import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import {MdWarning, MdInfo} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import Notification from '../Notification'

const AlertNotifications = () => (
  <>
    <h1>Alert Notification</h1>
    <Notification>
      <AiFillCheckCircle />
      Success <br /> You can access all the files in the folder
      <GrFormClose />
    </Notification>

    <Notification>
      <RiErrorWarningFill />
      Error <br /> Sorry, you are not authorized to have access to delete the
      file
      <GrFormClose />
    </Notification>

    <Notification>
      <MdWarning />
      Warning <br /> Viewers of this file can see comments and suggestions
      <GrFormClose />
    </Notification>

    <Notification>
      <MdInfo />
      Info <br /> Anyone on the internet can view these files
      <GrFormClose />
    </Notification>
  </>
)

export default AlertNotifications
