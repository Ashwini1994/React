import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../app/globals.css";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = (offset, limit = 20) =>
    fetch(`/api/pokemons?limit=${limit}&offset=${offset}`).then(
      async (response) => {
        const responseData = await response.json();
        setData([...data, ...responseData.data]);
        setLoading(false);
      }
    );

  useEffect(() => {
    fetchData(0);
  }, []);

  if (isLoading) return <Loader />;

  if (data.length === 0) return <p>No data available</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <main className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 min-h-screen p-24">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </main>
      <button
        className="text-white py-4 px-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => fetchData(data.length)}>
        Load more
      </button>
    </div>
  );
};

export default Dashboard;
