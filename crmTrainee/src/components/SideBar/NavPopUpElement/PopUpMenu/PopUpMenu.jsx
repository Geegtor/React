import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PopUpMenu.module.scss';
import { toggleExitModalPopUp } from '../../../../store/actions/modalActions';

export default function PopUpMenu(
  {
    isSidebarFull = false, setisActive, elem,
  },
) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (!elem.contains(e.target)) {
      setisActive(false);
    }
  };
  const handleExit = () => {
    dispatch(toggleExitModalPopUp());
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <div className={isSidebarFull ? `${styles.menu_items} ${styles.menu_items_full}` : styles.menu_items}>
      <NavLink to="/profile" className={styles.menu_item}>
        Мой профиль
      </NavLink>
      <NavLink to="/admin" className={styles.menu_item}>
        Telegram admin
      </NavLink>
      <NavLink to="/jira" className={styles.menu_item}>
        Jira
      </NavLink>
      <NavLink to="/support" className={styles.menu_item}>
        Support
      </NavLink>
      <button type="button" onClick={handleExit} className={`${styles.menu_item} ${styles.exit_menu_item}`}>
        Выйти
      </button>
    </div>
  );
}

PopUpMenu.propTypes = {
  isSidebarFull: PropTypes.bool.isRequired,
  setisActive: PropTypes.func.isRequired,
  elem: PropTypes.element.isRequired,
};
