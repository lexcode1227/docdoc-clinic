"use client"
import MainSection from './components/MainSection';
import ContactBanner from './components/ContactBanner';
import Services from './components/Services';
import AboutHospital from './components/AboutHospital';
import LatestNews from './components/LatestNews';
import MedicalDep from './components/MedicalDep';
import MedicalSpecialists from './components/MedicalSpecialists';
import RealiableServices from './components/RealiableServices';

const HomePage = () => {
  return (
    <>
      <MainSection/>
      <ContactBanner/>
      <Services/>
      <AboutHospital/>
      <LatestNews/>
      <MedicalDep/>
      <MedicalSpecialists/>
      <RealiableServices/>
    </>
  )
}

export default HomePage;