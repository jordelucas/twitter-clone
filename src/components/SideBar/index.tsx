import React from 'react';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';
import List from '../List'
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
            <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
            <FollowSuggestion name="Camila Magalhães" nickname="@camilaamgl" />
          ]}
        />  

        <List 
          title="Talvez você curta"
          elements={[
            <h1>teste</h1>,
            <h1>teste</h1>,
            <h1>teste</h1>
          ]}
        />  
      </Body>
    </Container>
  );
}

export default SideBar;