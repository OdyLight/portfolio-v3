import React from 'react';
import styled from 'styled-components';
import Glitch from 'components/Glitch';
import Button from 'components/Button';
import { fadeIn, media } from 'style';
import CodesandboxIcon from 'static/icons/codesandbox.svg';
import GitHubIcon from 'static/icons/github.svg';
import LinkedinIcon from 'static/icons/linkedin.svg';

const socialLinks = [
  {
    icon: CodesandboxIcon,
    url: 'https://codesandbox.io/',
  },
  {
    icon: GitHubIcon,
    url: 'https://github.com',
  },
  {
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/',
  },
];

const SocialMedia = ({ inside }) => (
  <Footer>
    <SocialIcons inside={inside}>
      {socialLinks.map((socialLink) => (
        <Glitch icon={socialLink.icon} key={socialLink.url}>
          {({ icon: GlitchIcon }) => (
            <IconContainer inside={inside} href={socialLink.url} target="_blank" noopener>
              <GlitchIcon />
            </IconContainer>
          )}
        </Glitch>
      ))}
    </SocialIcons>
    <Button
      href="https://docs.google.com/document/d/1oRRKbLnIwHAstLXkW2SHXKTz04Ce51gDXKIokOoUQo8/edit?usp=sharing"
      target="_blank"
    >
      <ButtonText>Contact Me</ButtonText>
    </Button>
  </Footer>
);

const Footer = styled.footer`
  margin-top: auto;
  padding: 0 var(--side-padding);
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s ease;

  ${media.tablet`
    display: none;
  `}
`;

// TODO: make border glitch animation
const SocialIcons = styled.div`
  margin-bottom: 1.8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;

  svg {
    stroke-width: 1;
  }
`;

const IconContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--grey-300);
  border: 1px solid currentColor;
  font-size: var(--fs-xsmall);
  --size: ${(p) => (p.inside === 'sidenav' ? '4.5rem' : '5.5rem')};
  width: var(--size);
  height: var(--size);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }

  svg {
    width: ${(p) => (p.inside === 'sidenav' ? '1.8rem' : '5.5rem')};
  }
`;

const ButtonText = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default SocialMedia;