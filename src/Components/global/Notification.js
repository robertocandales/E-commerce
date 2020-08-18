import { notification } from 'antd';

const Notification = ({
  placement = 'topRight',
  message = 'message default',
  type = 'success',
  description = ' ',
}) => {
  notification[type]({
    message,
    description,
    placement,
  });
};

export default Notification;
