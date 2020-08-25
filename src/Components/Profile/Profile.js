import React from 'react';
import { Typography } from 'antd';
import NewProduct from './NewProduct/NewProduct';
const { Title } = Typography;

const Profile = () => {
  return (
    <div>
      <Title type='secondary'> Perfil </Title>

      <NewProduct />
    </div>
  );
};

export default Profile;
