import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Mohamed <br />
        Full-Stack Developer
      </SectionTitle>
      <SectionText>
        I turn ideas into interactive digital experiences. From front-end finesse to back-end brilliance, I build and test web and mobile full-stack applications that don’t just work – they impress. Let’s create something amazing together.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:mohamedattia2034@gmail.com'} >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;