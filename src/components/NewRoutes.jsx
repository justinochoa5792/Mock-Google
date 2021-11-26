import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const NewRoutes = () => {
  return (
    <div className="p-4">
      <div className="p-4">
        {/* <Navigate to="/search"/> */}
        <Routes>
          <Route exact path="/search" element={<Results />} />
          <Route exact path="/images" element={<Results />} />
          <Route exact path="/news" element={<Results />} />
          <Route exact path="/videos" element={<Results />} />
        </Routes>
      </div>
    </div>
  );
};

export default NewRoutes;
