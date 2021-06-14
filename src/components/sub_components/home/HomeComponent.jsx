import Header from "./Header";
import CRD from "./CRD";
import CEC from "./CEC";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <>
      {/*Header Section*/}
      <Header covidData={props.covidData} />

      {/*CRD (Confirmed Recoverd Death case section) Section*/}
      <CRD key="card" covidData={props.covidData} />

      {/*Cases in each country (Country wise) section*/}
      <CEC key="table" covidData={props.covidData} />
      
      {/*Footer*/}
      <Footer />
    </>
  );
};

export default Home;
