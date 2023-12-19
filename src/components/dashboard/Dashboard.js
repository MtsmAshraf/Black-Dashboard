import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "../card/Card"
import styles from "./dashboard.module.css"
import LineChart from "../charts/LineChart"
import BarChart from "../charts/BarChart"

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <Card 
          headingSpan="Total Shipments" 
          headingH2="Performance" 
          width="100%"
          height="300px"
        >
          <div className={styles.chartCardContent}>
            <LineChart />
          </div>
        </Card>
        <Card 
          headingSpan="Total Shipments" 
          headingH2="763,215" 
          width="calc((100% - 60px)/ 3)"
          height="300px"
          icon="fa-solid fa-bell"
        >
          <div className={styles.chartCardContent}>
            <LineChart />
          </div>
        </Card>
        <Card 
          headingSpan="Daily Sales" 
          headingH2="3,500€" 
          width="calc((100% - 60px)/ 3)"
          height="300px"
          icon="fa-solid fa-chart-column" 
        >
          <div className={styles.chartCardContent}>
            <BarChart />
          </div>
        </Card>
        <Card 
          headingSpan="Completed Tasks" 
          headingH2="12,100K" 
          width="calc((100% - 60px)/ 3)"  
          height="300px"
          icon="fa-solid fa-paper-plane"
        >
          <div className={styles.chartCardContent}>
            <LineChart />
          </div>
        </Card>
        <Card
          headingSpan="Tasks(5)" 
          subHeading="Today"
          headingH2="" 
          width="calc((100% - 30px)/ 2)"  
          height="450px"
        >
          <div className={styles.settingList}>
            <div className={styles.settingIcons}>
              <span className={styles.settingIcon}>
                <FontAwesomeIcon icon="fa-solid fa-gear" />
              </span>
              <span className={styles.dropdownIcon}>
                <FontAwesomeIcon icon="fa-solid fa-caret-down" />
              </span>
            </div>
            {/*<div className={styles.settingList}>

            </div> */}
          </div>
          <div className={styles.tasksCheckboxes}>
            <div className={styles.task}>
              <input type="checkbox" id="task" name="task" value="Bike" />
              <label for="task">
                <h4>Update the Documentation</h4>
                <span>Dwuamish Head, Seattle, WA 8:47 AM</span>
              </label>
              <span className={styles.editTaskIcon}><FontAwesomeIcon icon="fa-solid fa-pencil" /></span>
            </div>
            <div className={styles.task}>
              <input type="checkbox" id="task2" checked="true" name="task" value="Bike" />
              <label for="task2">
                <h4>GDPR Compliance</h4>
                <span>The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.</span>
              </label>
              <span className={styles.editTaskIcon}><FontAwesomeIcon icon="fa-solid fa-pencil" /></span>
            </div>
            <div className={styles.task}>
              <input type="checkbox" id="task3" name="task" value="Bike" />
              <label for="task3">
                <h4>Solve the issues</h4>
                <span>Fifty percent of all respondents said they would be more likely to shop at a company</span>
              </label>
              <span className={styles.editTaskIcon}><FontAwesomeIcon icon="fa-solid fa-pencil" /></span>
            </div>
            <div className={styles.task}>
              <input type="checkbox" id="task4" name="task" value="Bike" />
              <label for="task4">
                <h4>Release v2.0.0</h4>
                <span>Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM</span>
              </label>
              <span className={styles.editTaskIcon}><FontAwesomeIcon icon="fa-solid fa-pencil" /></span>
            </div>
            <div className={styles.task}>
              <input type="checkbox" id="task5" name="task" value="Bike" />
              <label for="task5">
                <h4>Export the processed files</h4>
                <span>The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs.</span>
              </label>
              <span className={styles.editTaskIcon}><FontAwesomeIcon icon="fa-solid fa-pencil" /></span>
            </div>
            <div className={styles.task}>
              <input type="checkbox" id="task6" name="task" value="Bike" />
              <label for="task6">
                <h4>Update the </h4>
                <span>Dwuamish Head, Seattle, WA 8:47 AM</span>
              </label>
              <span className={styles.editTaskIcon}><FontAwesomeIcon icon="fa-solid fa-pencil" /></span>
            </div>
            <div className={styles.task}>
              <input type="checkbox" id="task7" name="task" value="Bike" />
              <label for="task7">
                <h4>Update the Documentation</h4>
                <span>Dwuamish Head, Seattle, WA 8:47 AM</span>
              </label>
              <span className={styles.editTaskIcon}><FontAwesomeIcon icon="fa-solid fa-pencil" /></span>
            </div>
            <div className={styles.task}>
              <input type="checkbox" id="task8" name="task" value="Bike" />
              <label for="task8">
                <h4>Update the Documentation</h4>
                <span>Dwuamish Head, Seattle, WA 8:47 AM</span>
              </label>
              <span className={styles.editTaskIcon}><FontAwesomeIcon icon="fa-solid fa-pencil" /></span>
            </div>
          </div>
        </Card>
        <Card
          headingSpan="" 
          headingH2="Simple Table" 
          width="calc((100% - 30px)/ 2)"  
          height="450px"
        >
          <ul className={styles.table}>
            <li>
              <span>name</span>
              <span>country</span>
              <span>city</span>
              <span>salary</span>
            </li>
            <li>
              <span>Dakota Rice</span>
              <span>Niger</span>
              <span>Oud-Turnhout</span>
              <span>$36,738</span>
            </li>
            <li>
              <span>Minerva Hooper</span>
              <span>Curaçao</span>
              <span>Sinaai-Waas</span>
              <span>$23,789</span>
            </li>
            <li>
              <span>Sage Rodriguez</span>
              <span>Netherlands</span>
              <span>Baileux</span>
              <span>$56,142</span>
            </li>
            <li>
              <span>Philip Chaney</span>
              <span>Korea, South</span>
              <span>Overland Park</span>
              <span>$38,735</span>
            </li>
            <li>
              <span>Doris Greene</span>
              <span>Malawi</span>
              <span>Feldkirchen in Kärnten</span>
              <span>$63,542</span>
            </li>
            <li>
              <span>Mason Porter</span>
              <span>Chile</span>
              <span>Gloucester</span>
              <span>$78,615</span>
            </li>
            <li>
              <span>Jon Porter</span>
              <span>Portugal</span>
              <span>Gloucester</span>
              <span>$98,615</span>
            </li>
          </ul>
        </Card>
    </div>
  )
}

export default Dashboard
