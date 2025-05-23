import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./History.module.css"
const History = () => {
  return (
    <section className={styles.container} id="history">
          <h2 className={styles.title}>History</h2>
          <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
            <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" className={styles.aboutImage} />
                <div className={styles.aboutItemText}>
                  <h3>Frontend Developer</h3>
                  <p>I'm a frontend developer with experience in building responsive
                    and optimized sites. 
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server" />
                <div className={styles.aboutItemText}>
                  <h3>Backend Developer</h3>
                  <p> I have experience developing fast and optimised back-end systems
                  and APIs.
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="Ui" />
                <div className={styles.aboutItemText}>
                  <h3>UI Designer</h3>
                  <p>  I have designed multiple landing pages and have created design
                  systems as well.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
  )
}

export default History