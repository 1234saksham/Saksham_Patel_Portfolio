"use client"
import React, { useRef, useState } from 'react';

import styles from '@/styles/SkillSection.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ProjectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Projects = () => {
  return (
    <div className={styles.projectdiv}>
      <h1>My Skills</h1>

      <div className='projectswipercontainer'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"



        >
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>HTML 5</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>TAILWIND CSS</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>JAVASCRIPT</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>REACT</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>C++</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Python</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>BootStrap</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>GIT</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>EXPRESS</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>NODE JS</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>MONGO DB</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects