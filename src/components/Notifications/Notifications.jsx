import css from './Notifications.module.css';
import PropTypes from 'prop-types';

function Notification({ children, variant = 'success', size = 'medium', customFontSize = null }) {
  const styles = {
    fontSize: customFontSize + 'px',
  };
  return (
    <p onClick={children} type='submit' style={customFontSize ? styles : {}} className={`${css.notification} ${css[variant] || ''} ${css[size] || ''}`}>
      {children}
    </p>
  );
}

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['danger', 'warning', 'info', 'success']),
  customFontSize: PropTypes.number,
};

export default Notification;
