import { useEffect } from "react";
import { Route, Routes, topbar } from "react-router-loading";
import AddTask from "./pages/AddTask";
import Appartements from "./pages/Appartements";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Header from "./partials/Header";


function App() {

  useEffect(() => {
    topbar.config({
      barColors: {
        0: "#FF0000",
        .3: "#FF0000",
        1: "#FF0000"
      }
    })
  }, [])


  return (
    <>
      <Header />
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home />} loading />
        <Route path="/add-task" element={<AddTask />} loading />
        <Route path="/contact-us" element={<Contact />} loading />
        <Route path="/appartements" element={<Appartements />} loading />
        <Route path="/detail/:id" element={<Detail />} loading />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
