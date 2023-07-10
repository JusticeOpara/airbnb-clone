import React from 'react';
import Navbar from './components/Navbar'
import { list, list2 } from './utils/data'
import Cards from './pages/Cardx'
import Categories from './components/Categories'
import { useState, useEffect } from 'react'
import styles from "./LoadingShimmer.module.css";
import Footer from './components/Footer';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Map from './components/Map';
import Camping from './pages/Camping';
import Omg from './pages/OMG';

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

          </Routes>

          {/* {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />} */}
          {/* <Map /> */}

          <Footer />
        </div>

      )
      }
    </BrowserRouter>
  )
}

export default App

