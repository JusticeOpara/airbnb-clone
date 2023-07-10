import React from 'react';
import Navbar from './components/Navbar'
import { list, list2 } from './utils/data'
import Cards from './components/Cardx'
import Categories, { categories } from './components/Categories'
import { useState, useEffect } from 'react'
import styles from "./LoadingShimmer.module.css";
 import Footer from './components/Footer';
 import { BrowserRouter , Link, Routes, Route } from 'react-router-dom';



function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // const handleFilterClick = (filterName) => {
  //   // Filter the homes based on the selected filter
  //   if (filterName === 'Lake') {
  //     setSelectedFilter(categories.filter((home) => { console.log(home == list2, "--jshfjhsjdhjhjfhdsjhjg") }));
  //   } else if (filterName === 'Camping') {
  //     setSelectedFilter(categories.filter((home) => { home.list }));
  //   } else if (filterName === "River") {
  //     selectedFilter(categories.filter((home) => { home.list3 }))
  //   }
  //   // Add more conditions for other filters if needed
  // };


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
      {isLoading ? (

        <LoadingShimmer />

      ) : (
        <div className='font-custom'>

          <div className="fixed w-full bg-white z-10 shadow-sm top-0  ">

            <Navbar />

            <Categories
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}

            />
          </div>


          
          {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}


           <Footer /> 
        </div>

      )
}
    </BrowserRouter>
  )
}

export default App

