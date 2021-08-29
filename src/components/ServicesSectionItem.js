import React from 'react';

import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web design',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Nesciunt consequuntur voluptatibus quam repudiandae dolore eum',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">
        {icon}
        <div className="servicesItem__title">{title}</div>
        <PText>{desc}</PText>
      </div>
    </ItemStyles>
  );
}