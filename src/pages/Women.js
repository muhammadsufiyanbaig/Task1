import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Women = () => {
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
    return (
      <h1 className="font-sans text-2xl font-bold text-gray-800">
        Please Wait...
      </h1>
    );
  }

  if (error) {
    return <p className="text-red-600">Error: {error}</p>;
  }
  // console.log(data);
  return (
    <div className="mt-10">
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => {
          if (item["category"] === "women's clothing") {
            return (
              <Link to={`/product/` + item.id} key={item.id} className="group">
      <div className="relative overflow-hidden bg-white rounded-md shadow-md group-hover:shadow-lg transition duration-300">
        <img
          className="w-full h-48 object-cover transition-transform transform group-hover:scale-105"
          src={item.image}
          alt="Product"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {item.title.substring(0, 15)}
          </h2>
          <p className="text-gray-700 mb-4">
            {item.description.substring(0, 50)}
          </p>
          <p className="text-green-500 font-semibold">${item.price}</p>
        </div>
      </div>
    </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Women;
