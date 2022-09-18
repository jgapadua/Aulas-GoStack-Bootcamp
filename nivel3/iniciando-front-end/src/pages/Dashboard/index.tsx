import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/profile">Meu perfil</Link>
      <button type="button" onClick={signOut}>
        <FiPower />
      </button>
    </>
  );
};
export default Dashboard;
