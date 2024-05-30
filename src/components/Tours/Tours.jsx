import React from "react";
import { Tour } from "../Tour/Tour";
import "./Tours.css";

export const Tours = ({ tours, deleteTour, refreshTours }) => {
  if (!tours.length) {
    return (
      <main className="empty-tours">
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="refresh-btn" onClick={refreshTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <section className="tours-container">
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours-wrapper">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
        ))}
      </div>
    </section>
  );
};
