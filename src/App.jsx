import React, { useEffect, useState } from "react";
import "./App.css";
import { Tours } from "./components/Tours/Tours";
import { getTours } from "./api/tours.api";
import { Loader } from "./components/Loader/Loader";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await getTours();
      const toursList = await response;
      setTours(toursList);
      console.log(tours, "tours in App");
    } catch (error) {
      console.error("Error fetching tours:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTour = (id) => {
    const newToursList = tours.filter((tour) => tour.id !== id);
    setTours(newToursList);
  };

  useEffect(() => {
    fetchTours();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error.message || "An error occurred."}</div>
      ) : (
        <Tours
          tours={tours}
          deleteTour={deleteTour}
          refreshTours={fetchTours}
        />
      )}
    </div>
  );
};
