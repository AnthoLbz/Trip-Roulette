import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Launch from './Launch.jsx'
import "./modal.css";

const ModalModalExample = () => (
  <Modal trigger={<Button className='modal-button'></Button>} >
    <Modal.Content className='frame'>
      <Modal.Description className='frame-2'>
        <Launch/>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
