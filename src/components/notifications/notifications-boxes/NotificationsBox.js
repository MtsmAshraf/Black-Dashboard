import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./notifications-box.module.css"
import { useState } from "react"
const NotificationsBox = ({priority, bellIcon, closeIcon, children}) => {
  const [shown,setShown] = useState(true)
  const [disappear,setDisappear] = useState(false)
  return (
    <div className={styles.notificationsBox} 
      style={{backgroundColor: priority ? "var(--"+priority.toLowerCase()+"-color)" : "var(--info-color)", 
              display: !shown ? "none" : "flex",
              opacity: !disappear ? "1" : "0",
              transition: "var(--main-transition)"
            }}
    >
      { bellIcon && 
        <div className={styles.bellIcon}>
          <FontAwesomeIcon icon="fa-solid fa-bell" />
        </div> 
      }
      <p>
        <strong>{priority} </strong>
        {children}
      </p>
      { closeIcon && 
        <div 
            className={styles.closeIcon}  
            onClick={(e) => {
              setDisappear(!disappear)
              setTimeout(() => {
                setShown(!shown)
              }, 200);
            }}
            >
          <FontAwesomeIcon 
            icon={closeIcon} 
          />
        </div> 
      }
    </div>
  )
}

export default NotificationsBox
