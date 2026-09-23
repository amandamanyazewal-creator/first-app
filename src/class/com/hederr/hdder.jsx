import React from "react";
import { Route, Routes } from "react-router-dom";
import Course from "../course";
import Serch from "../serchi";

function Heder() {
  return (
    <>
      <Routes>
        <Route element="./">{Heder}</Route>
        <Route element=".../com/course.jsx">{Course}</Route>
        <Route element=".../com/serchi.jsx">{Serch}</Route>
      </Routes>
    </>
  );
}
export default Heder;
