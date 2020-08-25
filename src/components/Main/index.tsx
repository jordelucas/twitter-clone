import React from 'react';

import { 
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Jordevá Lucas</strong>
          <span>215 Tweets</span>
        </ProfileInfo>
      </Header>

    </Container>
  )
}

export default Main;