// Importing AXIOS to fetch the data
import axios from "axios";
import { useState, useEffect } from "react";

import HomeComponents from "../sub_components/home/HomeComponent";

const Home = () => {
  // Logic to fetch the covid information

  // Creating a State variable to \set the values in DOM
  const [covidData, setstate] = useState();

  useEffect(() => {
    async function getCovidData() {
      // URL to fetch data
      const url = "https://api.covid19api.com/summary";
      // Fatching covid data
      const Data = await axios.get(url);
      setstate(Data);
    }
    getCovidData();
  }, []);

  return <> {covidData && <HomeComponents covidData={covidData} />} </>;
};

export default Home;
