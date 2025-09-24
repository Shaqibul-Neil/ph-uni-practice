import Navbar from "./Components/Navbar";
import Management from "./Components/Management";
import Footer from "./Components/Footer";

import "./App.css";
import { Suspense } from "react";

const fetchIssues = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar />
      <Suspense fallback="....Loading.....">
        <Management fetchPromise={fetchPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
