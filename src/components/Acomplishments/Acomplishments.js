import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 25, text: 'Data Projects'},
  { number: 18, text: 'Technologies Mastered', },
  { number: 19, text: 'Custom Tools Developed', },
  { number: 5, text: 'Diverse Industry Roles', },
  { number: 7000, text: 'Test Cases Created', },
  { number: 15, text: 'Platforms Tested', },
  { number: 2000, text: 'Defects Resolved', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Accomplishments </SectionTitle>
    <Boxes>
      {data.map((card, index) =>(
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
