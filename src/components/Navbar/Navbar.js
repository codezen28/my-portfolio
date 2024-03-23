import React, { useState } from "react";
import { NavLink, Link as linkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { ButtonContainer, GitHubButton, MobileIcon, MobileLink, MobileMenu, Nav, NavItems, NavLogo, NavbarContainer, Span } from "./NavbarStyledComponents";


const Navbar = () => {
  const [isOpen, issetOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              issetOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>{" "}
          <NavLink href="#experience">Experience</NavLink>{" "}
          <NavLink href="#projects">Projects</NavLink>{" "}
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>Github Profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileLink
            href="#about"
            onClick={() => {
              issetOpen(!isOpen);
            }}
          >
            About
          </MobileLink>
          <MobileLink
            href="#skills"
            onClick={() => {
              issetOpen(!isOpen);
            }}
          >
            Skills
          </MobileLink>
          <MobileLink
            href="#experience"
            onClick={() => {
              issetOpen(!isOpen);
            }}
          >
            Experience
          </MobileLink>
          <MobileLink
            href="#projects"
            onClick={() => {
              issetOpen(!isOpen);
            }}
          >
            Projects
          </MobileLink>
          <MobileLink
            href="#education"
            onClick={() => {
              issetOpen(!isOpen);
            }}
          >
            Education
          </MobileLink>
          <GitHubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href={Bio.github}
            target="_blank"
          >
            Github Profile
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
