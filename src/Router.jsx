import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
