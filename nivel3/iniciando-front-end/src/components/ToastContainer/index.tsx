import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainaer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu algo</strong>
          <p>Tente novamente mais tarde</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Sucesso</strong>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>

      <Toast type="error">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possivel realizar o login</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainaer;
