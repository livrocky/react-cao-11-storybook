import css from './Input.module.css';
import PropTypes from 'prop-types';

function Input({ color = 'light', placeholder, value }) {
  return <input className={`${css.input} ${css[color]}`} placeholder={placeholder} value={value} />;
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['light', 'dark']),
  value: PropTypes.string,
};
export default Input;
