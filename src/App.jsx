import React from 'react'
import Navbar from './components/Navbar'
import { list, list2 } from './utils/data'
import Cards from './components/Cardx'
import Categories from './components/Categories'
import { useState } from 'react'



function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div className='font-custom'>
      
      <div className="fixed w-full bg-white z-10 shadow-sm top-0  ">

        <Navbar />

        <Categories
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>


      {/* <Cards list={list} /> */}
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  )
}

export default App
