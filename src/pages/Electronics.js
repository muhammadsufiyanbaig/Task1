import React, { useState, useEffect } from "react";

const Electronics = () => {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInfo = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (loading) {
    return <h1 className="font-sans text-2xl font-bold text-gray-800">Please Wait...</h1>;
  }

  if (error) {
    return <p className="text-red-600">Error: {error}</p>;
  }
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-3 justify-center items-center h-full bg-gray-100">
        {data.map((item) =>{ 
          if (item["category"] === "electronics") {
            return(          
            <div
              key={item.id}
              className="max-w-xs mx-4 my-8 bg-gray-100 rounded-md shadow-lg p-4"
            >
              <img
                className="w-full h-32 object-cover mb-4 rounded-md"
                src={item.image}
                alt="Product"
              />
              <h2 className="text-xl font-semibold mb-2 w-[17rem] truncate">
                {item.title}
              </h2>
              <p className="text-gray-700 mb-4 w-[15rem] truncate">
                {item.description}
              </p>
              <p className="text-green-500 font-semibold">${item.price}</p>
            </div>
          )    
          }
        })}
      </div>
    </div>
  );
};

export default Electronics;
