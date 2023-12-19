import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import styles from "./styles/content-layout.module.css"
const ContentLayout = () => {
  return (
    <div className={styles.contentLayout}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default ContentLayout
