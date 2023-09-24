import React from 'react'
import Bar from './components/Banner';
import Navbar from './components/navbar';
import MainSection from './components/MainSection';
import ContactBanner from './components/ContactBanner';
import Services from './components/Services';
import AboutHospital from './components/AboutHospital';
import LatestNews from './components/LatestNews';
import MedicalDep from './components/MedicalDep';

const HomePage = () => {
  return (
    <main className="h-full">
      <div className='flex flex-col justify-center '>
        <Bar/>
        <Navbar/>
        <MainSection/>
        <ContactBanner/>
        <Services/>
        <AboutHospital/>
        <LatestNews/>
        <MedicalDep/>
      </div>
    </main>
  )
}

export default HomePage;