"use client"
import React, { useRef, useState } from 'react';

import styles from '@/styles/ProjectSection.module.css'
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
      <h1>My Projects</h1>

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
              <h1>Project 1</h1>
              <h2></h2>
              <h2> </h2>
              <h2>Peer-to-Peer</h2>
              <h2> Renewable Energy </h2>
              <h2>Trading Platform</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Project 2</h1>
              <h2> </h2>
              <h2>Portfolio</h2>
              <h2>Website</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Project 3</h1>
              <h2>Personalized</h2>
              <h2>Health</h2>
              <h2>Dashboard</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects