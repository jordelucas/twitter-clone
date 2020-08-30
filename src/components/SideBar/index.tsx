import React from 'react';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis commodi molestias est omnis praesentium, ducimus nobis, dolor enim tempore odit fugiat blanditiis? Autem et nihil debitis quae eius omnis unde.'.repeat(90)}</p>
      </Body>
    </Container>
  );
}

export default SideBar;