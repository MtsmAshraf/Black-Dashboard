import Card from '../card/Card'
import styles from './table-list.module.css'

const TableList = () => {
  return (
    <div className={styles.tableList}>
      <Card
        headingSpan="" 
        headingH2="Simple Table" 
        plain={false}
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
      <Card
        headingSpan="" 
        headingH2="Simple Table" 
        plain={true}
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

export default TableList
