import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="/">Creative tim</a>
          <a href="/">about us</a>
          <a href="/">blog</a>
        </div>
        <div className={styles.copyRights}>
          <p>
            © 2023 made with <FontAwesomeIcon className={styles.icon} icon="fa-solid fa-heart" /> by <a href="https://moatasim-ashraf.netlify.app">Moatasim</a>
          </p>
        </div>
       </div>
  )
}

export default Footer
