import React from 'react';
import { Modal, Button, Space, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const WarningModal = ({ label = '', type = 'info', title = 'title', history }) => {
  const [state, setState] = React.useState({
    modal1Visible: false,
    modal2Visible: false,
  });

  const setModal2Visible = (modal2Visible) => {
    setState({ modal2Visible });
  };
  return (
    <div>
      <Button type='primary' onClick={() => setModal2Visible(true)}>
        {label ? label : 'default'}{' '}
      </Button>
      <Modal
        title={title}
        centered
        visible={state.modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}>
        <>
          <Row justify='center'>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type='primary' onClick={() => history.push('/Register')}>
                Soy nuevo
              </Button>
            </Col>
          </Row>
          <Row justify='center'>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type='link' onClick={() => history.push('/login')}>
                Ya tengo cuenta
              </Button>
            </Col>
          </Row>
        </>
      </Modal>
    </div>
  );
};

export default WarningModal;
