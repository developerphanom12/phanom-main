import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Pages/Login";
import { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Layout from "./components/Pages/Layout";
import { Hiring } from "./components/HomePages/HireIndianTalentPages/Hiring/Hiring";
import { Service } from "./components/HomePages/ServicePages/Service/Service";
import { Home } from "./components/HomePages/Home/Home";
import { Hosting } from "./components/HomePages/Hosting/Hosting";
import { Seo } from "./components/HomePages/ServicePages/Seo/Seo";
import { Appointment } from "./components/Appointment/Appointment";
import { Test } from "./components/Test";


// import { Seo } from "./components/HomePages/ServicePages/Seo/Seo";

function App() {
  const userDetails = useSelector((state) => state.userDetails);
  console.log(userDetails, "detailss");
  return (
    <Root className="App">
      <Toaster position="top-center" />
      <Layout>
      
        <Routes>
        <Route path="/" element={<Hosting/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/hosting" element={<Hosting />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/seo" element={<Seo/>}/>
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/test" element={<Test/>} />


        <Route path="/appointment" element={<Appointment />} />

          


        </Routes>

      </Layout>
    </Root>
  );
}

export default App;

// background: radial-gradient(
//   181.67% 54.42% at 78.48% 56.29%,
//   #0c4a6e 23%,
//   #03045e 99%
// );

const Root = styled.section`
  height: 100vh;
`;
