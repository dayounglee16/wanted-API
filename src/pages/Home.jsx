import "./../index.css";
import { Routes, Route } from "react-router-dom";
import InstrastPosition from "../componentes/InstrastPosition";
import Navbar from "../componentes/Navbar";
import styled from "styled-components";
import IconMenuList from "../componentes/IconMenuList";
import PositionRecommendation from "../componentes/PositionRecommendation";
import BannerAd from "../componentes/BannerAd";
import TagAccumulate from "../componentes/TagAccumulate";
import Footer from "../componentes/Footer";
import JobPosting from "./JobPosting";
import Profile from "./Profile";
import BookMark from "./BookMark";
import WantedBot from "../componentes/WantedBot";
import InterestedCompany from "./InterestedCompany";
import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await instance.get("/photos");
        setPhotos([...res.data]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Wrap>
              <div className="inner">
                <WantedBot />
                <IconMenuList photos={photos} />
                <PositionRecommendation photos={photos} />
                <BannerAd photos={photos} />
                <TagAccumulate photos={photos} />
                <InstrastPosition photos={photos} />
              </div>
              <Footer />
            </Wrap>
          }
        />

        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/interestedcompany" element={<InterestedCompany />} />
        <Route path="/shortcutItem" element={<JobPosting photos={photos} />} />
      </Routes>
    </>
  );
};

export default Home;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .inner {
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;
  }
`;
