import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommended from "./Recommended";
import News from "./News";
import CustomerReviews from "./CustomerReviews";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
      <CustomerReviews />
    </>
  );
};

export default Home;
