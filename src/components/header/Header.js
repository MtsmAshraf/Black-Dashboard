import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./header.module.css"
import List from "../list/List"
import profileImg from "../../assests/imgs/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from "react-redux"
import { toggleSearch } from "../../store/searchBox/searchBoxSlice"

const Header = () => {
  const activeClass = styles.active;
  var dispatch = useDispatch()
  let [showNotificationList,setShowNotificationList] = useState(false);
  let [showUserList,setShowUserList] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.dotsIcon}><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></div>
      <div className={styles.parts}>
        <div className={styles.part} onClick={() => {dispatch(toggleSearch())}}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass"  /><span className={styles.iconText}>Search</span></div>
        <div className={showNotificationList ? styles.part + " " + styles.active : styles.part + " " }  onClick={() => {setShowNotificationList(!showNotificationList);setShowUserList(false)}}>
          <span><FontAwesomeIcon icon="fa-solid fa-wave-square" /><span className={styles.iconText}>Notifications</span></span>
          <List className={styles.notifications}>
            <li><NavLink to="/">You have a new task</NavLink></li>
            <li className={styles.done}><NavLink to="/">done task</NavLink></li>
            <li className={styles.done}><NavLink to="/">done task</NavLink></li>
            <li><NavLink to="/">You have a new task</NavLink></li>
            <li className={styles.done}><NavLink to="/">done task</NavLink></li>
          </List>
        </div>
        <div className={showUserList ? styles.part + " " + styles.active : styles.part + " " }  onClick={() => {setShowUserList(!showUserList);setShowNotificationList(false)}}>
          <div className={styles.img}>
            <img src={profileImg} alt="profile img" />
          </div>
          <span><FontAwesomeIcon icon="fa-solid fa-caret-down" /></span>
          <List className={styles.admin}>
            <li><NavLink to="/user-profile">Profile</NavLink></li>
            <li><NavLink to="/">Settings</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
          </List>
        </div>
      </div>
    </div>
  )
}

export default Header
