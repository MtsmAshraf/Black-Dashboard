import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs"
import styles from  "./styles/root-styles.module.css"
import profileImg from '../assests/imgs/profile.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../store/sidebar/sideBarSlice"
import { toggleSearch } from "../store/searchBox/searchBoxSlice"
import NotificationsBox from "../components/notifications/notifications-boxes/NotificationsBox"
const RootLayout = () => {
  var sideBarVisibility = useSelector((state) => state.sidebar.value)
  var searchBoxVisibility = useSelector((state) => state.searchBox.value)
  const dispatch = useDispatch()
  return (
    <div className={styles.rootLayout}>
    <div className={styles.topLeft} name="popUpContainer">        
        <NotificationsBox
            bellIcon={true}
            closeIcon="fa-solid fa-xmark"
          >Welcome to Black Dashboard React - a beautiful freebie for every web developer.</NotificationsBox>
        <NotificationsBox
          bellIcon={true}
          closeIcon="fa-solid fa-xmark"
        >Welcome to Black Dashboard React - a beautiful freebie for every web developer.</NotificationsBox>
    </div>
    <div className={styles.topRight} name="popUpContainer">        
      <NotificationsBox
          bellIcon={true}
          closeIcon="fa-solid fa-xmark"
        >Welcome to Black Dashboard React - a beautiful freebie for every web developer.</NotificationsBox>
      <NotificationsBox
        bellIcon={true}
        closeIcon="fa-solid fa-xmark"
      >Welcome to Black Dashboard React - a beautiful freebie for every web developer.</NotificationsBox>
    </div>
    <div className={styles.bottomLeft} name="popUpContainer">        
      <NotificationsBox
          bellIcon={true}
          closeIcon="fa-solid fa-xmark"
        >Welcome to Black Dashboard React - a beautiful freebie for every web developer.</NotificationsBox>
      <NotificationsBox
        bellIcon={true}
        closeIcon="fa-solid fa-xmark"
        >Welcome to Black Dashboard React - a beautiful freebie for every web developer.</NotificationsBox>
    </div>
    <div className={styles.bottomRight} name="popUpContainer">        
      <NotificationsBox
          bellIcon={true}
          closeIcon="fa-solid fa-xmark"
        >Welcome to Black Dashboard React - a beautiful freebie for every web developer.</NotificationsBox>
      <NotificationsBox
        bellIcon={true}
        closeIcon="fa-solid fa-xmark"
        >Welcome to Black Dashboard React - a beautiful freebie for every web developer.</NotificationsBox>
    </div>
        <div className={ searchBoxVisibility ? styles.searchBox + " " + styles.show : styles.searchBox }>
          <input type="search" placeholder="Search"/>
          <FontAwesomeIcon className={styles.closeSearch} icon="fa-solid fa-xmark" onClick={() => {dispatch(toggleSearch())}}/>
        </div>
        <div className={styles.side}>
            <Breadcrumbs />
            <aside className={sideBarVisibility ? styles.show : ""}>
                <a href="https://moatasim-ashraf.netlify.app" className={styles.sidebarHeader}>
                  <div className={styles.img}><img src={profileImg} alt="profile pic"/></div>
                  <a href="https://moatasim-ashraf.netlify.app">Moatasim</a>
                </a>
                <div className={styles.links}>
                    <NavLink onClick={() => {dispatch(toggle())}} to="/">
                      <div className={styles.icon}><FontAwesomeIcon icon="fa-solid fa-chart-pie" /></div>
                      <span>Dashboard</span>
                    </NavLink>
                    <NavLink onClick={() => {dispatch(toggle())}} to="/icons">
                      <div className={styles.icon}><FontAwesomeIcon icon="fa-brands fa-react" /></div>
                      <span>Icons</span>
                    </NavLink>
                    <NavLink onClick={() => {dispatch(toggle())}} to="/map">
                      <div className={styles.icon}><FontAwesomeIcon icon="fa-solid fa-thumbtack" /></div>
                      <span>Map</span>
                    </NavLink>
                    <NavLink onClick={() => {dispatch(toggle())}} to="/notifications">
                      <div className={styles.icon}><FontAwesomeIcon icon="fa-solid fa-bell" /></div>
                      <span>Notifications</span>
                    </NavLink>
                    <NavLink onClick={() => {dispatch(toggle())}} to="/user-profile">
                      <div className={styles.icon}><FontAwesomeIcon icon="fa-solid fa-user" /></div>
                      <span>User Profile</span>
                    </NavLink>
                    <NavLink onClick={() => {dispatch(toggle())}} to="/table-list">
                      <div className={styles.icon}><FontAwesomeIcon icon="fa-solid fa-table-list" /></div>
                      <span>Table List</span>
                    </NavLink>
                    <NavLink onClick={() => {dispatch(toggle())}} to="/typography">
                      <div className={styles.icon}><FontAwesomeIcon icon="fa-solid fa-align-left" /></div>
                      <span>Typography</span>
                    </NavLink>
                    <a href="https://moatasim-ashraf.netlify.app" target="_blank" rel="noreferrer">
                      <div className={styles.icon}><FontAwesomeIcon icon="fa-solid fa-code" /></div>
                      <span>Moatasim's Website</span>
                    </a>
                </div>
            </aside>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
        <div className={sideBarVisibility ? styles.overlay + " " + styles.show : styles.overlay}
            onClick={() => {dispatch(toggle())}}
        ></div>
    </div>
  )
}

export default RootLayout
