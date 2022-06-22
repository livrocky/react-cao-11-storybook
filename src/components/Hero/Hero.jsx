import css from './Hero.module.css';
import PropTypes from 'prop-types';

function Hero({ type = 'primary', title, subtitle }) {
  return (
    <div className={`${css.hero} ${css[type] || ''}`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

Hero.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
