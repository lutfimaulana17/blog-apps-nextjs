import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" className={styles.avatar} fill />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Lutfi Maulana</span>
              <span className={styles.date}>17.05.2027</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" className={styles.image} fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Sunt quaerat dicta eveniet fuga nulla, 
              nemo optio deserunt repellat odio asperiores consectetur 
              sint nesciunt accusantium necessitatibus cum possimus nostrum facilis quae.
            </p>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Sunt quaerat dicta eveniet fuga nulla, 
              nemo optio deserunt repellat odio asperiores consectetur 
              sint nesciunt accusantium necessitatibus cum possimus nostrum facilis quae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Sunt quaerat dicta eveniet fuga nulla, 
              nemo optio deserunt repellat odio asperiores consectetur 
              sint nesciunt accusantium necessitatibus cum possimus nostrum facilis quae.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage