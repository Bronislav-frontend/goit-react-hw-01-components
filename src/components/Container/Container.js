import PropTypes from 'prop-types';
import s from './Container.module.css';

function Container({ children }) {
  return <section className={s.container}>{children}</section>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
