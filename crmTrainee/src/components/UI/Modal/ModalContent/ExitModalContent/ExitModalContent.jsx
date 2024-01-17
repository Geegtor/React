import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import ControlButton from '../../../ControlButton/ControlButton';
import styles from './ExitModalContent.module.scss';

export default function ExitModalContent({ toggleExitModalPopUp }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggleExitModalPopUp());
  };
  const redirectHandler = () => {
    toggleModal();
    history.push('/');
  };
  return (
    <>
      <div className={styles.text}>
        Хотите выйти?
      </div>
      <div className={styles.button_container}>
        <ControlButton className={`${styles.button} ${styles.button_no}`} onClick={toggleModal} value="Нет" />
        <ControlButton className={`${styles.button} ${styles.button_yes}`} onClick={redirectHandler} value="Да" color="yellow" border="none" />
      </div>
    </>
  );
}

ExitModalContent.propTypes = {
  toggleExitModalPopUp: PropTypes.func.isRequired,
};
