import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchComponent from "./Component";

const SearchContainer = () => {
  const [result, setResult] = useState([]);
  const location = useLocation();
  const searchData = location.searchData;
  useEffect(() => {
    (async () => {
      const searchResult = (
        await axios.post("/api/search", { searchData: searchData })
      ).data.result;
      setResult(searchResult);
    })();
  }, []);
  return <SearchComponent result={result} searchData={searchData} />;
};

export default SearchContainer;
