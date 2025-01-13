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

function App() {
  const userDetails = useSelector((state) => state.userDetails);
  console.log(userDetails, "detailss");
  return (
    <Root className="App">
      <Toaster position="top-center" />
      <Layout>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/hiring" element={<Hiring />} />
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
