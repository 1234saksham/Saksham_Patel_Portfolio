"use client"
import React from 'react'
import styles from '@/styles/SocialSection.module.css';
import { SocialIcon } from 'react-social-icons'

const SocialSection = () => {
  return (
    <div className={styles.social}>
      <div className={styles.socialcard}
        onClick={() => window.open('https://www.instagram.com/saksham_patel06/', '_blank')}
      >
        <SocialIcon url="https://instagram.com" style={{ height: 40, width: 40 }} />
        <p>@saksham_patel06</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://mail.google.com/mail/u/1/#inbox?compose=new', '_blank')}
      >
        <SocialIcon url="https://mail.google.com" style={{ height: 40, width: 40 }} />
        <p>sakshampatel0607@gmail.com</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://www.linkedin.com/in/saksham-patel-6b6a06224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
      >
        <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }} />
        <p>Saksham Patel</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://github.com/1234saksham', '_blank')}
      >
        <SocialIcon url="https://github.com/" style={{ height: 40, width: 40 }} />
        <p>Saksham Patel</p>
      </div>
    </div>


  )
}

export default SocialSection