import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuestionBank from "./components/QuestionBank";
import { Route, Routes, Navigate } from "react-router-dom";
import Question from "./components/Question";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<QuestionBank />} /> */}
        <Route path=":topicId/:difficulty" element={<Question />} />
      </Routes>
      <QuestionBank />
    </>
  );
}

export default App;
