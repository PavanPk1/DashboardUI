import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
// import { useEffect } from "react";
// import { gapi } from "gapi-script";

// const clientID =
//   "838285250878-qd8qq6853heakettdv0osusn1d1ft286.apps.googleusercontent.com";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
