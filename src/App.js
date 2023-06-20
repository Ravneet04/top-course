import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import Filter from "./Components/Filter"
import { apiUrl , filterData } from "./data";
import  Spinner  from "./Components/Spinner";
import { toast } from 'react-toastify';

const App = () => {
  const[courses,setcourses] = useState([]);
  const[loading,setloading] = useState(true);
  const[category , setcategory] = useState(filterData[0].title);

  async function fetchData(){
    setloading(true);
    try{
      const response = await fetch(apiUrl);
      let output = await response.json();
      setcourses(output.data);
    }
    catch(error){
      toast.error("bye");
    }
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  } , [])
  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setcategory={setcategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category = {category}/>)
        }
      </div>
      
    </div>
  );
};

export default App;
