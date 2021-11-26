import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      "x-rapidapi-host": "google-search3.p.rapidapi.com",
      "x-rapidapi-key": "1490be4857mshc0fa7387b34dc9fp1fca78jsnff3069d0824b",
    });

    const data = await response.json();
    setResults(data);
    setLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
