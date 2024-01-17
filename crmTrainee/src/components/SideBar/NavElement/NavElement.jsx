import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
  useLocation,
} from 'react-router-dom';
import styles from '../Navbar/Navbar.module.scss';

function NavElement(
  {
    link = '/', text = '', isSidebarFull = false, menuItem = {},
  },
) {
  const { pathname } = useLocation();
  return (
    <div className={styles.link_wrapper}>
      <NavLink
        exact
        to={link}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        {Array.isArray(menuItem) && pathname === link ? menuItem[1] : menuItem[0]}
        {!Array.isArray(menuItem) && menuItem}
        {isSidebarFull && <span className={styles.text}>{text}</span>}
      </NavLink>
      {!isSidebarFull && <span className={styles.tooltip}>{text}</span>}
    </div>
  );
}

NavElement.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSidebarFull: PropTypes.bool.isRequired,
  menuItem: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.array,
  ]).isRequired,
};

export default NavElement;
