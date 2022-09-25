import React from "react";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Footer from "./components/Footer/Footer";
import AppOne from "./components/Footer/AppOne";
function App() {
  return (
    <React.Fragment>
      <Home />
      <MainHeader />
      <AppOne />
      <Footer />
    </React.Fragment>
  );
}

export default App;
