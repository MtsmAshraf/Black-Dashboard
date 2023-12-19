import Card from '../card/Card'
import styles from './user-profile.module.css'
import profileImg from "../../assests/imgs/profile.jpg" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserProfile = () => {
  return (
    <div className={styles.userProfile}>
      <Card
        subHeading="Edit Profile"
        width="65%"
      >
        <form>
          <div>
            <label>Company (disabled)</label>
            <input type='text' placeholder='Creative Code Inc.' disabled/>
          </div>
          <div>
            <label>Username</label>
            <input type='text' value='michael23'/>
          </div>
          <div>
            <label>Email address</label>
            <input type='email' placeholder='mike@email.com'/>
          </div>
          <div>
            <label>First Name</label>
            <input type='name' className={styles.names} value="Mike"/>
          </div>
          <div>
            <label>Last Name</label>
            <input type='name' className={styles.names} value="Andrew"/>
          </div>
          <div>
            <label>Address</label>
            <input type='address' className={styles.address} value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"/>
          </div>
          <div>
            <label>City</label>
            <input type='name' value="Cairo"/>
          </div>
          <div>
            <label>Country</label>
            <input type='name' value="Egypt"/>
          </div>
          <div>
            <label>Postal Code</label>
            <input type='number' placeholder='Postal Code'/>
          </div>
          <div>
            <label>About</label>
            <textarea>Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
          </div>
          <input type='submit' value="Save"/>

        </form>
      </Card>
      <Card 
        width="30%"
        height="470px"
      >
        <div className={styles.profileImg}>
          <img src={profileImg} alt='profileImg'/>
        </div>
        <h4 className={styles.profileH4}>Moatasim Ashraf</h4>
        <span>Ceo/Co-Founder</span>
        <p className={styles.profileP}>Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
        <div className={styles.socialLinks}>
          <a href='www.facebook.com' target='_blank'>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </a>
          <a href='www.twitter.com' target='_blank'>
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
          </a>
          <a href='www.google.com' target='_blank'>
            <FontAwesomeIcon icon="fa-brands fa-google" />
          </a>
        </div>
      </Card>
    </div>
  )
}

export default UserProfile
