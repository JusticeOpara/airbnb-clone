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
import Caves from "./pages/Caves"
import Tinyhomes from './pages/Tinyhomes';
import Lakefront from './pages/Lakefront';
import Surfing from "./pages/Surfing";
import Golfing from './pages/Golfing';
import Sharedhomes from './pages/Sharedhomes';
import Treehouses from './pages/Treehouses';





function App() {
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
            <Route exact path="/" element={<Cards />} />
            <Route path="/camping" element={<Camping />} />
            <Route path="/omg" element={<Omg />} />
            <Route path="/arctic" element={<Arctic />} />
            <Route path="/design" element={<Design />} />
            <Route path="/domes" element={<Domes />} />
            <Route path="/caves" element={<Caves />} />
            <Route path="/surfing" element={<Surfing />} />
            <Route path="/tinyhomes" element={<Tinyhomes />} />
            <Route path="/treehouses" element={<Treehouses />} />
            <Route path="/lakefront" element={<Lakefront />} />
            <Route path="/golfing" element={<Golfing />} />
            <Route path="/sharedhomes" element={<Sharedhomes />} />
            <Route path="/map" element={<Map />} />

          </Routes>

        


          <Footer />
        </div>

      )}
    </BrowserRouter>
  )
}

export default App

