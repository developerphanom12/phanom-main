import React, {useState} from 'react'
import ContainerFluid from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import GraphicsDesign from './NavCategories/GraphicDesign';
import ProgrammingTech from './NavCategories/ProgrammingTech';
import DigitalMarketing from './NavCategories/DigitalMarketing';
import VideoAnimation from './NavCategories/VideoAnimation';
import Branding from './NavCategories/Branding';
import BussinessManagement from './NavCategories/BusinessManagement';
import ArtificialIntelligence from './NavCategories/ArtificialIntelligence';
import WritingTranslation from './NavCategories/WritingTranslation';


const BottomNavBuyer = () => {
  const [openList, setOpenList] = useState({}); // Store the open/close state for all items

const handleMouseEnter = (id) => {
  setOpenList(prevState => ({
    ...prevState,
    [id]: true, // Set the specific list to open
  }));
};

const handleMouseLeave = (id) => {
  setOpenList(prevState => ({
    ...prevState,
    [id]: false, // Set the specific list to close
  }));
};

  return (
    <Root>
    <Navbar expand="lg" className="bg-body-tertiary">
      <ContainerFluid fluid>
        <Nav>
          {["graphic", "tech", "marketing", "video", "writing", "branding", "management", "ai"].map((item, index) => {
            const id = `list${index + 1}`; 
            return (
              <div
                key={id}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleMouseLeave(id)}
                id={item}
              >
                <Nav.Link href={`#${item}`}>{`${item.charAt(0).toUpperCase() + item.slice(1)}`}</Nav.Link>
                {openList[id] && (
                  <div className="option_list_list">
                    {index === 0 && <GraphicsDesign />}
                    {index === 1 && <ProgrammingTech />}
                    {index === 2 && <DigitalMarketing />}
                    {index === 3 && <VideoAnimation />}
                    {index === 4 && <WritingTranslation />}
                    {index === 5 && <Branding />}
                    {index === 6 && <BussinessManagement />}
                    {index === 7 && <ArtificialIntelligence />}
                  </div>
                )}
              </div>
            );
          })}
        </Nav>
      </ContainerFluid>
    </Navbar>
  </Root>
  )
}

export default BottomNavBuyer;

const Root = styled.section`
  width: 100vw;
  border-bottom: 1px solid #dadbdd;
  border-top: 1px solid #dadbdd;

  nav.navbar.navbar-expand.navbar-light.bg-light {
    border: 1px solid #e4e5e7;
    position: relative;
  }
  a.nav-link {
    color: #62646a;
    display: block;
    font-size: 16px;
    line-height: 24px;
    padding: 6px 10px !important;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid #1dbf73;
    }
  }
  .option_list_list {
    position: absolute;
    top: 47px;
    width: 100vw;
    background-color: #fff;
    z-index: 11111;
    left: 0;
    font-size: 14px;
  }
  nav.navbar.navbar-expand.navbar-light.bg-light {
    padding: 0px;
  }
  .navbar-nav {
    margin-left: 68px;
  }

  @media (max-width: 567px) {
    .navbar > .container,
    .navbar > .container-fluid,
    .navbar > .container-lg,
    .navbar > .container-md,
    .navbar > .container-sm,
    .navbar > .container-xl,
    .navbar > .container-xxl {
      justify-content: center !important;
      padding-bottom: 8px;
    }
    .navbar-nav {
      margin-left: 0px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .navbar > .container,
    .navbar > .container-fluid,
    .navbar > .container-lg,
    .navbar > .container-md,
    .navbar > .container-sm,
    .navbar > .container-xl,
    .navbar > .container-xxl {
      justify-content: center !important;
      padding-bottom: 8px;
    }
    .navbar-nav {
      margin-left: 0px;
    }
  }
`;

