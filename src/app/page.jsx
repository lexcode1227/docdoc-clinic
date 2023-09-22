import React from 'react'
import Bar from './components/Bar';
import Navbar from './components/navbar';

const HomePage = () => {
  return (
    <main className="h-full mt-3.5">
      <div className='flex flex-col justify-center mt-7 mb-7'>
        <Bar/>
        <Navbar/>
      </div>
    </main>
  )
}

export default HomePage;