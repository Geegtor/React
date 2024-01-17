import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../Navbar/Navbar.module.scss';
import PopUpMenu from './PopUpMenu/PopUpMenu';

function NavPopUpElement(
  {
    text = '', isSidebarFull = false, menuItem = {},
  },
) {
  const [isActive, setisActive] = useState(false);
  const ref = useRef(null);
  return (
    <div ref={ref} role="presentation" className={styles.link_wrapper} onClick={() => setisActive(!isActive)}>
      <div className={isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}`}>
        {<img alt="ava" src={menuItem} className={styles.profile_img} />}
        {isSidebarFull && <span className={styles.text}>{text}</span>}
      </div>
      {!isActive && (!isSidebarFull && <span className={styles.tooltip}>{text}</span>)}
      {isActive
        && (
        <PopUpMenu
          isSidebarFull={isSidebarFull}
          setisActive={setisActive}
          elem={ref.current}
        />
        )}
    </div>
  );
}

NavPopUpElement.propTypes = {
  text: PropTypes.string.isRequired,
  isSidebarFull: PropTypes.bool.isRequired,
  menuItem: PropTypes.elementType.isRequired,
};

export default NavPopUpElement;
