import React from 'react';
import styles from '../CandidateInfoField/CandidateInfoField.module.scss';

const CandidateNav = () => (
  <div className={styles.nav_field}>
    <div className={styles.nav_field_item}>Заявки</div>
    <div className={`${styles.nav_field_item} ${styles.nav_field_item_active}`}>О кандидате</div>
  </div>
);

export default CandidateNav;
