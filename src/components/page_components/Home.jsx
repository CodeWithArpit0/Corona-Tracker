// Importing AXIOS to fetch the data
import axios from "axios";
import {
  useState,
  useEffect
} from "react";

import HomeComponents from "../sub_components/home/HomeComponent";
import Loading from "../page_components/Loading"

const Home = () => {
  // Logic to fetch the covid information

  // Creating a State variable to \set the values in DOM
  const [covidData, setCovidData] = useState();

  const getCovidData = async () => {
    // URL to fetch data
    const url = "https://api.covid19api.com/summary";
    // Fatching covid data and storing it in "covidData"
    setCovidData(await axios.get(url));
  }

  useEffect(() => {
    getCovidData();
  }, []);

  if(!covidData){
    return <Loading/>
  }
  return <HomeComponents covidData={covidData}/>
};

export default Home;