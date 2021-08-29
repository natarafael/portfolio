import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServiceItemStyle = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServiceItemStyle>
      <div className="container">
        <SectionTitle heading="Services" subheading="What i will do for you" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I can create stunning designs, like this one"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I can create full stack Websites with good functionality, design and fully responsive"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App dev"
            desc="I can create fully compatible mobile apps"
          />
        </div>
      </div>
    </ServiceItemStyle>
  );
}
