import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/img/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on github</Title>

      <Form>
        <input placeholder="Enter the name of the repository" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/71903302?v=4"
            alt="Christofer Assis"
          />
          <div>
            <strong>Chriszao/Clynic</strong>
            <p>
              Forma fácil de se conectar a prestadores de serviço da área médica
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/71903302?v=4"
            alt="Christofer Assis"
          />
          <div>
            <strong>Chriszao/Clynic</strong>
            <p>
              Forma fácil de se conectar a prestadores de serviço da área médica
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/71903302?v=4"
            alt="Christofer Assis"
          />
          <div>
            <strong>Chriszao/Clynic</strong>
            <p>
              Forma fácil de se conectar a prestadores de serviço da área médica
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
