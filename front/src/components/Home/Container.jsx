import axios from "axios";
import { useEffect } from "react";
import HomeComponent from "./Component.jsx";
const HomeContainer = () => {
  // useEffect(() => {
  //   (async () => {
  //     const data = (await axios.post("http://localhost:8080/api/main")).data;
  //   })();
  // }, []);
  return <HomeComponent></HomeComponent>;
};
export default HomeContainer;
