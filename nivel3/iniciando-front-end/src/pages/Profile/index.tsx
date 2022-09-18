import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

const Profile: React.FC = () => (
  <>
    <h1>Perfil</h1>
    <Link to="/dashboard">
      <FiArrowLeft />
    </Link>
  </>
);
export default Profile;
