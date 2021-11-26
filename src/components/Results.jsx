import React, { useEffect } from "react";
import { useLocation } from "react-router";
import ReactPlayer from "react-player";

import Loading from "./Loading";
import { useResultContext } from "../context/ResultContextProvider";

const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  if (loading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return "Search";
    default:
      return "ERROR";
  }
};

export default Results;
