import css from './Notifications.module.css';
import PropTypes from 'prop-types';

function Notification({ children, variant = 'success', size = 'medium', customFontSize = null, icon, cancel }) {
  const styles = {
    fontSize: customFontSize + 'px',
  };
  return (
    <div style={customFontSize ? styles : {}} className={`${css.notification} ${css[variant] || ''} ${css[size] || ''}`}>
      <div className={css.alert}>
        <i className={`fa ${icon}`} aria-hidden='true'></i>
        {children}
      </div>

      <div>
        <i className={`fa ${cancel}`} aria-hidden='true'></i>
      </div>

      {/* <p onClick={children} type='submit' style={customFontSize ? styles : {}} className={`${css.notification} ${css[variant] || ''} ${css[size] || ''}`}>
        {children}
      </p> */}
    </div>
  );
}

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['danger', 'warning', 'info', 'success']),
  icon: PropTypes.oneOf(['fa fa-check', 'fa fa-flag', 'fa fa-exclamation-triangle', 'fa fa-info']),
  cancel: PropTypes.oneOf(['fa fa-times']),
  customFontSize: PropTypes.number,
};

export default Notification;
