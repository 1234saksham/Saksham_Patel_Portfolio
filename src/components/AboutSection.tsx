import React from 'react'
import styles from '@/styles/AboutSection.module.css'
import AboutImg from '@/assets/about-img.png'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className={styles.about}>
      <div className={styles.textdiv}>
        <h1>About me</h1>
        <p>As a full stack developer, my resume reflects a passion for crafting comprehensive and captivating digital experiences. With expertise in front-end technologies like HTML, CSS, and JavaScript, I transform designs into seamless, user-friendly interfaces. Leveraging frameworks such as React and Angular, I breathe life into websites, ensuring responsiveness across devices.</p>
        <p>On the back end, I am proficient with technologies like Node.js, Express, and Python, allowing me to develop robust server-side applications and APIs. My experience with databases, both SQL and NoSQL, ensures efficient data management and retrieval. I also have a solid understanding of cloud services and deployment, enhancing my ability to deliver scalable solutions.</p>
        <p>With a keen eye for detail and a commitment to staying abreast of industry trends, my resume showcases not just my skills but also my dedication to driving innovation in web development. My ability to handle both front-end and back-end tasks allows me to create holistic and efficient web applications, making me a versatile and valuable asset to any development team.</p>

      </div>
      <Image src={AboutImg} alt="aboutimg" quality={100} />

    </div>
  )
}

export default AboutSection