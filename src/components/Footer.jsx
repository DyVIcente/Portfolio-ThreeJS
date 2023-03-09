import React from 'react'

import logo from '../assets/logo.svg';
import { styles } from '../style';

const Footer = () => {
  return (
    <div className='bg-black-100 w-full h-auto p-10'>
        <div className='flex flex-row justify-between mx-8'>
            <a href="/">
                <img src={logo} alt="logo" className='w-[40%]'/>
            </a>
            <div className='flex flex-col flex-wrap justify-center items-center'>
                <div className={`${styles.heroSubText} flex flex-row flew-wrap gap-8`}>
                    <a href="https://github.com/DyVIcente">GitHub</a>
                    <a href="https://www.linkedin.com/in/dylan-vicente/">LinkedIn</a>
                </div>
                    <p className={`${styles.sectionSubText}`}>© 2023 Dylan Vicente | Tous Droits Réservées |</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer