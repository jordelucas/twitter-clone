import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>Jordevá Lucas</h1>
        <h2>@jordelucas</h2>

        <p>
          Developer at <a href="https://smartmetropolis.imd.ufrn.br">@SmartMetropolis</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Natal, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 29 de dezembro de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>537</strong>
          </span>
          <span>
            <strong>1123</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;