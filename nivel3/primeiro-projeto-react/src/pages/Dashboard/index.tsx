import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53950692?v=4"
            alt="João Gabriel Pádua"
          />
          <div>
            <strong>jgapadua/Aulas-GoStack-Bootcamp</strong>
            <p>
              Repositório contendo todos os códigos feitos nas aulas do Bootcamp
              GoStack
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53950692?v=4"
            alt="João Gabriel Pádua"
          />
          <div>
            <strong>jgapadua/Aulas-GoStack-Bootcamp</strong>
            <p>
              Repositório contendo todos os códigos feitos nas aulas do Bootcamp
              GoStack
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53950692?v=4"
            alt="João Gabriel Pádua"
          />
          <div>
            <strong>jgapadua/Aulas-GoStack-Bootcamp</strong>
            <p>
              Repositório contendo todos os códigos feitos nas aulas do Bootcamp
              GoStack
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
