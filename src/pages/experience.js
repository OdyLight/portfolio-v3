import React from 'react';
import styled from 'styled-components';
import { useRouteData } from 'react-static';
import PageContainer from 'components/layout/PageContainer';
import WorkExperience from 'components/WorkExperience';
import Title from 'components/Title';
import Button from 'components/Button';
import H1 from 'components/H1';
import ExternalLinkIcon from 'static/icons/external-link.svg';

export default () => {
  const { experienceData } = useRouteData();

  const { header, companies } = experienceData;

  return (
    <>
      <Title title={header} />
      <PageContainer>
        <Content>
          <H1 largeMargin>{header}</H1>
          <CvButton>
            <span>View CV</span>
            <ExternalLinkIcon />
          </CvButton>
          <ExperienceList>
            {companies.map((company, index) => (
              <WorkExperience company={company} key={index} />
            ))}
          </ExperienceList>
        </Content>
      </PageContainer>
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CvButton = styled(Button)`
  margin-bottom: 3.6rem;

  svg {
    width: var(--fs-default);
    margin-left: 0.8rem;
    position: relative;
    top: -2px;
  }
`;

const ExperienceList = styled.ul``;
