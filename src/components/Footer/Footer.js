import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
            <LinkTitle>Via Call</LinkTitle>
            <LinkItem href='tel: (343) 988-0590'>Click here</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Via Email</LinkTitle>
            <LinkItem href='mailto:mohamedattia2034@gmail.com'>mohamedattia2034@gmail.com</LinkItem>
          </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Turning Code into Impact, One Project at a Time</Slogan>
        </CompanyContainer> 
        <SocialContainer>
          <SocialIcons href='https://github.com/attiamohmed' target="_blank">
            <AiFillGithub size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/mohamed-attia-844566283/' target="_blank">
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://x.com/' target="_blank">
            <AiFillTwitterCircle size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/attia_32/' target="_blank">
            <AiFillInstagram size='3rem'/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
