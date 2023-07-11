import React from 'react';
import Navbar from './components/Navbar'
import Cards from './pages/Cardx'
import Categories from './components/Categories'
import { useState, useEffect } from 'react'
import styles from "./LoadingShimmer.module.css";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Camping from './pages/Camping';
import Omg from './pages/Omg';
import Arctic from './pages/Arctic';
import Design from './pages/Design';
import Domes from './pages/Domes';
import Map from './components/Map';
// git clone https://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@github.com/justiceopara/theprojectname.git
function App() {
  // const [selectedFilter, setSelectedFilter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {

      setIsLoading(false);
    }, 2000);
  }, [])

  const LoadingShimmer = () => {
    <div className="relative h-[320px]">
      <div className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r
       from-gray-200 via-gray-300 to-gray-200 ${styles.animateShimmer}`}></div>
    </div>
  };

  return (

    <BrowserRouter>

      {isLoading ? (<LoadingShimmer />) : (

        <div className='font-custom'>
          <div className="fixed w-full bg-white z-10 shadow-sm top-0  ">
            <Navbar />
            <Categories />
          </div>

          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/camping" element={<Camping />} />
            <Route path="/omg" element={<Omg />} />
            <Route path="/arctic" element={<Arctic />} />
            <Route path="/design" element={<Design/>} />
             <Route path="/domes" element={<Domes/>}/>
             <Route path="/map" element={<Map/>}/>
          </Routes>


          

          <Footer />
        </div>

      )
      }
    </BrowserRouter>
  )
}

export default App

