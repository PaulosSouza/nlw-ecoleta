import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './styles.css'

interface StatusShow {
  showed: boolean;
}

const SuccessMessage: React.FC<StatusShow> = ({ showed }) => {
  const [show, setShow] = useState(showed);
  const history = useHistory();

  setTimeout(() => {
    if (show) {
      setShow(false);

      history.push('/');
    }
  }, 2500);

  return (
    <>
      <div id="modal-success" className="container">
        <FiCheckCircle />
        <h1>
          Cadastro concluído!
        </h1>
      </div> 
    </>
  )
};

export default SuccessMessage;