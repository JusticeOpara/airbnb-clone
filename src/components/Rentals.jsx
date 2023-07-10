

  const Categories = ({ selectedFilter, setSelectedFilter, }) => {
	return (
		<Container>
			<div className="flex flex-row items-center">


				<div className='pt-[0.5rem]  flex flex-row items-center justify-between overflow-x-auto overflow-x-hidden'>
					{categories.map((item) => {
						const { label, Icon } = item;

						return (
							// 					<Link to={`/homes/${icon.name}`}>
							//     <FontAwesomeIcon icon={icon.icon} /> {icon.name}
							//   </Link>
							<div key={label}
								className={`flex  flex-col  items-center  justify-center gap-2 p-3 border-b-2
                    hover:text-neutral-800 transition cursor-pointer border-transparent text-neutral-500 
                    ${label == selectedFilter &&
									"border-b-neutral-800 text-neutral-800"
									}`}
								onClick={() => {
									setSelectedFilter(label);
								}}>
								<Link to={`/categories/${item.label}`}>
									<Icon size={24} />
								</Link>


								<div
									className={`font-black text-[12px] ${label == selectedFilter && "selected-label"
										}`}>
									{label}
								</div>
							</div>
						);
					})}

				</div>



				<div className="border rounded-lg w-[150px] h-[50px] flex justify-center items-center font-black ">

					<BsFilter size={24} />

					<p className="text-[14px]">Filter</p>
				</div>
			</div>
		</Container>
	);
};

export default Categories;



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
  
  