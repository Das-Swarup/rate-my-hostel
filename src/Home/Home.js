import React from "react";
import Nav from "../Nav/Nav";
import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";
import logo from "./logo.png";
import star from "./star.png";
import hand from "./hand.png";

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <div className="home-banner">
        <p>India's Own Hostel Reviews & Rating Platform</p>

        <div className="searchbox">
          <form className="search">
            <input
              type="text"
              placeholder="Search for your Hostel/City/PIN Code"
              name="search"
            />
            <button type="submit">
              <SearchIcon className="search-icon" />
            </button>
          </form>
        </div>
      </div>

      

      <div className="home-desc">
        <h3>Find your Hostel</h3>
        <p>
          Search for your hostel in the search bar using Hostel Name / City /
          PIN Code and your hostel will show up in the search results. If your
          Hostel isn't listed on our site yet, you can simply add it by clicking
          on "Add your hostel".
        </p>
        <img className="logo" src={logo} alt="" />
      </div>
      <div style={{ marginLeft: "400px" }} className="home-desc">
        <div className="circle">
          <img className="star" src={star} alt="" />
        </div>
        <h3>Rate & Review your Hostel</h3>
        <p>
          If you're a student residing in a hostel, you can rate and review your
          hostel based on categories like- Room Quality, Mess Food, & Washroom
          Hygiene. You just need to signup using your school/college provided
          email address. By doing this you are helping your peers to choose
          better.
        </p>
      </div>
      <div className="home-desc">
        <h3>Scroll through ratings & reviews</h3>
        <p>
          By clicking on a Hostel Name, you can check the average ratings &
          number of students who reviewed the hostel. You can also scroll
          through individual ratings and reviews.
        </p>
        <div className="circle2">
          <img className="hand" src={hand} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
