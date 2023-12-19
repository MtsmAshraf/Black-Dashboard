import React, { useEffect } from 'react'
import Card from '../card/Card'
import styles from "./notifications.module.css"
import NotificationsBox from './notifications-boxes/NotificationsBox'
const Notifications = () => {
  useEffect(() => {
    let addPopUpsBtns = document.querySelectorAll("div[name='addBtn']")
    let popUpsContainers = document.querySelectorAll("div[name='popUpContainer']")
    console.log(popUpsContainers)
    addPopUpsBtns.forEach((btn,index) => {
      btn.addEventListener("click",() => {
        console.log(index)
        let addedChild = document.createElement("div"); 
        
        addedChild.innerHTML =  `
        <NotificationsBox
          bellIcon={true}
          closeIcon="fa-solid fa-xmark"
        >Welcome to Black Dashboard React - a beautiful freebie for every web developer.
        </NotificationsBox>
        `
        addedChild.style.cssText = `
          padding: 15px;
          border-radius: var(--main-br);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background-color: var(--info-color)
          `
          let addedChildBellICon = document.createElement("div");
          addedChildBellICon.innerHTML = `
            <div className={styles.bellIcon}>
              <FontAwesomeIcon icon="fa-solid fa-bell" />
            </div> 
          `
          addedChildBellICon.style.cssText = `
            font-size: 22px;
          `
          let addedChildCloseICon = document.createElement("div");
          addedChildBellICon.innerHTML = `
            <div className={styles.bellIcon}>
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div> 
          `
          addedChildCloseICon.style.cssText = `
            font-size: 22px;
            cursor: pointer;
          `
          addedChild.append(addedChildBellICon,addedChildCloseICon)
        popUpsContainers[index].append(addedChild)
      })
    })
  })
  return (
    <div className={styles.notifications}>
      <Card
        width="calc((100% - 30px) / 2)"
        height="fit-content"
        headingH2="Notifications Style"
      >
      <div className={styles.cardContent}>
        <NotificationsBox
          priority=""
          bellIcon={false}
          closeIcon=""
        >
          This is a plain notification
          This is a plain notification
          This is a plain notification
          This is a plain notification
        </NotificationsBox>
        <NotificationsBox
          priority=""
          bellIcon={false}
          closeIcon="fa-solid fa-xmark"
        >
          This is a plain notification
        </NotificationsBox>
        <NotificationsBox
          priority=""
          bellIcon={true}
          closeIcon="fa-solid fa-xmark"
        >
          This is a plain notification
        </NotificationsBox>
        <NotificationsBox
          priority=""
          bellIcon={true}
          closeIcon="fa-solid fa-xmark"
        >
          This is a plain notification
          This is a plain notification
          This is a plain notification
          This is a plain notification
          This is a plain notification
        </NotificationsBox>
      </div>
      </Card>
      <Card
        width="calc((100% - 30px) / 2)"
        height="fit-content"
        headingH2="Notifications States"
      >
        <div className={styles.cardContent}>
          <NotificationsBox
            priority="Primary"
            bellIcon={false}
            closeIcon="fa-solid fa-xmark"
          >
            -  This is a regular notification made with
          </NotificationsBox>
          <NotificationsBox
            priority="info"
            bellIcon={false}
            closeIcon="fa-solid fa-xmark"
          >
            -  This is a regular notification made with
          </NotificationsBox>
          <NotificationsBox
            priority="success"
            bellIcon={false}
            closeIcon="fa-solid fa-xmark"
          >
            -  This is a regular notification made with
          </NotificationsBox>
          <NotificationsBox
            priority="warning"
            bellIcon={false}
            closeIcon="fa-solid fa-xmark"
          >
            -  This is a regular notification made with
          </NotificationsBox>
          <NotificationsBox
            priority="danger"
            bellIcon={false}
            closeIcon="fa-solid fa-xmark"
          >
            -  This is a regular notification made with
          </NotificationsBox>
        </div>
      </Card>
      <Card
        width="100%"
      >
        <div className={styles.cardCustomHeading}>
          <h4>Notifications Places</h4>
          <span>Click To View Notifications</span>
        </div>
        <div className={styles.cardCustomContent}>
          <div className={styles.box} name="addBtn">Top Left</div>
          <div className={styles.box} name="addBtn">Top Right</div>
          <div className={styles.box} name="addBtn">Bottom Left</div>
          <div className={styles.box} name="addBtn">Bottom Right</div>
        </div>
      </Card>
    </div>
  )
}

export default Notifications
