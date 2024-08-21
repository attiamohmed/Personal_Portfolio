import React from 'react';
import { DiAtlassian, DiAws, DiCode, DiDatabase, DiDropbox, DiFirebase, DiNodejs, DiPython, DiReact, DiTerminal, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      From concept to completion, explore the technologies that bring my projects to life— blending front-end creativity with back-end precision.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Express, Java, REST APIs, .NET
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with<br />
            Figma, Adobe XD, Balsamiq, InVision
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAtlassian size='3rem'/>
        <ListContainer>
          <ListTitle>QA Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Selenium, JUnit, Cypress, Mocha, Jira, Azure DevOps
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiDatabase size='3rem'/>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB, MySQL, PostgreSQL, Oracle, Microsoft SQL Server
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPython size='3rem'/>
        <ListContainer>
          <ListTitle>AI & Machine Learning:</ListTitle>
          <ListParagraph>
              Experience with<br />
              Python, TensorFlow, PyTorch, OpenCV, Apache Spark
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
