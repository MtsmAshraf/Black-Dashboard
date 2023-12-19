import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './card.module.css'
const Card = ({headingSpan , headingH2 ,icon, width, height , children , subHeading , plain}) => {
    let plainStyling = {
        backgroundColor: "transparent",
        boxShadow: "none",
    }
    return (
        <div className={styles.card} 
            style={{width: width, height: height, backgroundColor: plain ? "transparent" : "var(--card-bg)", boxShadow: plain ? "none" : "var(--main-shadow)"}}
            >
            { (headingH2 || headingSpan) &&
                <div className={styles.cardHeading}>
                {headingSpan && <span>{headingSpan}</span>}
                {subHeading && <span className={styles.subHeading}>{subHeading}</span>}
                <div>
                    {icon ? <FontAwesomeIcon className={styles.cardIcon} icon={icon} /> : null}
                    <h2>{headingH2}</h2>
                </div>
            </div>
        }
            <div className={styles.childrenDiv}>
                {children}
            </div>
        </div>
  )
}

export default Card
