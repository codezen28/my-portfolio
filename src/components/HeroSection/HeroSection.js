import React from "react";
import {
  HeroBg,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  ResumeButton,
  Span,
  SubTitle,
  TextLoop,
  Title,
} from "./HeroStyledComponents";
import { Bio } from "../../data/constants";

import TypewriterComponent from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />{" "}
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>

            <TextLoop>
              I am a{" "}
              <Span>
                <TypewriterComponent
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img
              src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
              alt="image"
            ></Img>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
