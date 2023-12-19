import { useLocation } from "react-router-dom"
import styles from './breadcrumbs.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { toggle } from "../../store/sidebar/sideBarSlice.js";
const Breadcrumbs = () => {
    const sideBarVisibility = useSelector((state) => state.sidebar.value)
    const dispatch = useDispatch()
    const location = useLocation()
    const crumb = location.pathname.split("/")[1] ?
        location.pathname.split("/")[1].toLocaleUpperCase().split("-")[1] ? location.pathname.split("/")[1].toLocaleUpperCase().split("-")[0] + " " +  location.pathname.split("/")[1].toLocaleUpperCase().split("-")[1]
        : location.pathname.split("/")[1].toLocaleUpperCase()
        : "DASHBOARD"
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.crumb}>
        {crumb}
      </div>
      <div className={styles.burgerIcon} onClick={() => { dispatch(toggle())}}>
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div>
    </div>
  )
}

export default Breadcrumbs
