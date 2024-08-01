import React from 'react'
import styles from '@/styles/PortfolioSection.module.css'
import Image from 'next/image'

const PortfolioSection = () => {
  return (
    <div className={styles.section1outer}>
      <div className={styles.subtextdiv}>
        <div className={styles.left}>
          <div className={styles.about}>
            <p>Hi, I am <span>Saksham Patel</span></p>
            <p>I build full stack websites and mobile applications, I will solve all your business problems. I am open to freelance work.</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.stat}>
            <h1>1+</h1>
            <p>Years of<br></br> experience</p>

          </div>
        </div>

      </div>
      <div className={styles.maintextdiv}>
        <p>I am a </p>
        <h1><span>&nbsp;</span>FULL STACK</h1>
        <h1><span>&nbsp;</span> DEVELOPER</h1>

      </div>
      <video src={'/smoke1.mp4'} autoPlay loop muted
        className={styles.smokevideo}
      />
    </div>
  )
}

export default PortfolioSection