import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3 position-relative overflow-hidden hero-card">
          <img
            className="card-img img-fluid hero-img"
            src="./assets/main.png.jpg"
            alt="New Season Arrivals"
          />
          <div className="hero-overlay" />

          <div className="card-img-overlay d-flex align-items-center">
            <div className="container hero-content">
              <h1 className="display-5 fw-bold mb-3">New Season Arrivals</h1>
              <p className="lead mb-4 d-none d-sm-block">
                Discover curated picks for the season with fresh styles and daily deals.
                Upgrade your wardrobe with essentials that feel as good as they look.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge bg-light text-dark">
                  <i className="fa fa-truck me-1" aria-hidden="true"></i>
                  Free Shipping over $50
                </span>
                <span className="badge bg-light text-dark">
                  <i className="fa fa-shield me-1" aria-hidden="true"></i>
                  Secure Checkout
                </span>
                <span className="badge bg-light text-dark">
                  <i className="fa fa-star me-1" aria-hidden="true"></i>
                  New Arrivals
                </span>
              </div>

              <div className="d-flex flex-wrap gap-2">
                <Link to="/product" className="btn btn-light btn-lg">
                  Shop Now
                </Link>
                <Link to="/product" className="btn btn-outline-light btn-lg">
                  View Deals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
