import styles from './map-c.module.css'

const MapC = () => {
  return (
    <div className={styles.maps}>
      <h4>Google Maps</h4>
      <div className={styles.theMap}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7110399.729071364!2d24.848600969660374!3d29.520006375008382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1701946354407!5m2!1sen!2seg"
          style={{border: 0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade" 
          title='Google Map'></iframe>
      </div>
    </div>  
  )
}

export default MapC
