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
import { SocialMediaMarketing } from "./components/HomePages/ServicePages/SocialMediaMarketing/SocialMediaMarketing";
import { PayPerClick } from "./components/HomePages/ServicePages/PayPerClick/PayPerClick";
import { YouTubeMarketing } from "./components/HomePages/ServicePages/YouTubeMarketing/YouTubeMarketing";
import { WebDevelopment } from "./components/HomePages/ServicePages/WebDevelopment/WebDevelopment";
import { Shopify } from "./components/HomePages/ServicePages/Shopify/Shopify";
import { Java } from "./components/HomePages/ServicePages/Java/Java";

function App() {
  const userDetails = useSelector((state) => state.userDetails);
  console.log(userDetails, "detailss");
  return (
    <Root className="App">
      <Toaster position="top-center" />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/test" element={<Test />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/service" element={<Service />} />
          <Route path="/offshore-seo-company-in-india/" element={<Seo />} />

          <Route
            path="/offshore-social-media-marketing-agency-in-india/"
            element={<SocialMediaMarketing />}
          />

          <Route
            path="/offshore-ppc-marketing-agency-in-india/"
            element={<PayPerClick />}
          />

          <Route
            path="/offshore-youtube-marketing-services-in-india/"
            element={<YouTubeMarketing />}
          />

          <Route
            path="/offshore-website-development-services-in-india/"
            element={<WebDevelopment />}
          />

          <Route
            path="/offshore-shopify-web-development-services-in-india/"
            element={<Shopify />}
          />

          <Route
            path="/offshore-java-software-development-company-in-india/"
            element={<Java />}
          />
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
