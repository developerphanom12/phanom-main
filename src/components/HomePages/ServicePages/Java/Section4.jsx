import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
} from "../../../../Global/GlobalText";

export const Section4 = () => {
  return (
    <Root>
      <span>
        <Heading> Promote Your Brand with a </Heading>
        <GradientHeading> Java Development Services</GradientHeading>

  
      </span>

      <Blackdescription>
      Our staff members at Phanom Professionals are proud to provide Java development services of the highest quality. We work towards enhancing your business presence through building high-performing custom Java applications. Our specialty is developing software solutions that are tailor made to your requirements, are secure, and can grow with your business. User satisfaction is paramount, and we achieve this through advanced Java application development, entailing the creation of rapidly performant, responsive, and modern applications. From enterprise class software to web applications, we build modern solutions that are guaranteed to be multi-platform, secure, and enhance the performance, user engagement, and the SEO ranking of your application. Ready to elevate your business? Call us today so we can start building the amazing Java-based solutions that will drive your success.
       </Blackdescription>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  @media (max-width: 567px) {
    padding: 30px 20px 0;
    span {
      br {
        display: none;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
  }
`;
