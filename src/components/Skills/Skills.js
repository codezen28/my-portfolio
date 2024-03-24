import React from "react";
import { skills } from "../../data/constants";
import {
  Container,
  Desc,
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillTitle,
  SkillsContainer,
  Title,
  Wrapper,
} from "./SkillStyledComponent";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills </Title>
        <Desc>
          Here are some of my skills on which I have been working for past 2
          years
        </Desc>

        <SkillsContainer>
          {skills.map((item) => (
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillItem>
                    <SkillImage src={skill.image}></SkillImage>
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
