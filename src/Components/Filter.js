import React from 'react'

 const Filter = (props) => {
    let filterData = props.filterData;
    const category = props.category;
    const setcategory = props.setcategory;
    function filterHandler(title){
      setcategory(title);
    }
  return (
    // flex wrap responsive mein kam aaga 
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
    {
        filterData.map( (data) => (
            <button 
             className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            "bg-opacity-40 border-transparent"}
            `}
            key={data.id} onClick={() =>filterHandler(data.title)}>{data.title}</button>
        ))
    }
    </div>
  )
}
export default Filter
