import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const Details = () => {
  const { id } = useParams();
  // const id = param.id
  const url = `https://fakestoreapi.com/products/${id}`;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(data);
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
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* images - start */}
            <div className="grid gap-4 lg:grid-cols-4">
              <div className="relative object-cover overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <img
                  src={data.image}
                  loading="lazy"
                  alt="Product Image"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            {/* content - start */}
            <div className="md:py-8">
              {/* name - start */}
              <div className="mb-2 md:mb-3">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {data.title}
                </h2>
              </div>
              {/* name - end */}
              {/* description - start */}
              <p className="mb-6 flex items-center gap-3 md:mb-10">
                {data.description}
              </p>
              {/* description - end */}
              {/* rating - start */}
              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <div className="flex h-7 items-center gap-1 rounded-full bg-gray-500 px-2 text-white">
                  <span className="text-sm">{data.rating.rate}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 transition duration-100">
                  {data.rating.count} ratings
                </span>
              </div>
              {/* rating - end */}
              {/* price - start */}
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    ${data.price}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  incl. VAT plus shipping
                </span>
              </div>
              {/* price - end */}
              {/* shipping notice - start */}
              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <span className="text-sm">2-4 day shipping</span>
              </div>
              {/* shipping notice - end */}
              {/* buttons - start */}
              <div className="flex">
                <button
                  onClick={() => {
                // Pass the product object
                    alert("Added to Cart!");
                  }}
                  className="inline-block flex-1 rounded-lg bg-gray-500 px-5 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:bg-gray-700 sm:flex-none md:text-base"
                >
                  Add to Cart
                </button>
              </div>
              {/* buttons - end */}
            </div>
            {/* content - end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
