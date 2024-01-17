import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './WarningModal.module.scss';
import { ReactComponent as CancelButton } from '../../../../assets/img/svg/ModalSVG/cancel.svg';
import { ReactComponent as WarningSign } from '../../../../assets/img/svg/ModalSVG/warning.svg';

function WarningModal({ children, classForContainer = '', toggleExitModalPopUp }) {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggleExitModalPopUp());
  };
  return (
    <div className={styles.modal_background}>
      <div className={`${styles.modal_container} ${styles[classForContainer]}`}>
        <WarningSign className={styles.warning_sign} />
        <CancelButton
          className={styles.modal_cancel_button}
          onClick={toggleModal}
        />
        {children}
      </div>
    </div>
  );
}

WarningModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.array,
  ]).isRequired,
  classForContainer: PropTypes.string.isRequired,
  toggleExitModalPopUp: PropTypes.func.isRequired,
};

export default WarningModal;
