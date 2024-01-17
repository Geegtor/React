import React from 'react';
import PropTypes from 'prop-types';
import styles from './ControlButtons.module.scss';
import ControlButton from '../../UI/ControlButton/ControlButton';

const ControlButtons = ({ handleCancel, formId }) => (
  <>
    <ControlButton type="button" className={styles.distance_between_buttons} color="transparent" width="min-width180" border="border" value="Отмена" onClick={handleCancel} />
    <ControlButton type="submit" className={styles.button_wrapper} color="yellow" width="min-width180" border="no_border" value="Сохранить" form={formId} />
  </>
);

ControlButtons.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
};

export default ControlButtons;
