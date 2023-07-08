import React from 'react'
import Navbar from './components/Navbar'
import { list, list2 } from './utils/data'
import Cards from './components/Cardx'
import Categories from './components/Categories'
import { useState, useEffect } from 'react'
import styles from "./LoadingShimmer.module.css";


// import { ShimmerPostList } from "react-shimmer-effects";

// class Example extends Component {
//   render() {
//     return <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;
//   }
// }



function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleFilterClick = (filterName) => {
    // Filter the homes based on the selected filter
    if (filterName === 'Shared homes') {
      setSelectedFilter(homes.filter((home) =>{list2}));
    } else if (filterName === 'OMG!') {
      setSelectedFilter(homes.filter((home) =>{list}));
    }
    // Add more conditions for other filters if needed
  };


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
    <>
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


          {/* <Cards list={list} /> */}
          {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
        </div>
      )
      }
    </>
  )
}

export default App

