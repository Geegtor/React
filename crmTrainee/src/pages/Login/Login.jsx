import React, { useState } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import styles from './Login.module.scss';
import { ReactComponent as CrmLogo } from '../../assets/img/svg/LoginPageIcons/crm_logo.svg';
import { ReactComponent as HiddenPassword } from '../../assets/img/svg/LoginPageIcons/hidden_password.svg';
import { ReactComponent as ShowPassword } from '../../assets/img/svg/LoginPageIcons/show_password.svg';
import ControlButton from '../../components/UI/ControlButton/ControlButton';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .max(255, 'Логин превышает 255 символов')
      .matches(/.+@.+\..+/i, 'Введите корпоративную почту')
      .required('Введите эл. почту'),
    password: Yup.string()
      .max(255, 'Пароль превышает 255 символов')
      .required('Введите пароль'),
  });
  const [hide, setHide] = useState(true);
  const showButton = () => {
    setHide((prevState) => !prevState);
  };
  const history = useHistory();
  const onSubmit = () => {
    history.push('/profile');
  };
  return (
    <div className={styles.body}>
      <div className={styles.crm_logo}>
        <CrmLogo />
      </div>
      <div className={styles.login_form_container}>
        <div className={styles.content}>
          <p className={styles.form_header}>Вход в систему</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className={styles.form_table}>
              <div className={styles.email_container}>
                <label htmlFor="email" className={styles.label}>Электронная почта</label>
                <Field type="email" id="email" name="email" className={styles.field} placeholder="Ваш эл. почта" />
                <p className={styles.error_message}>
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className={styles.password_container}>
                <label htmlFor="password" className={styles.label}>Пароль</label>
                <div className={styles.field_container}>
                  <Field type={hide ? 'password' : 'text'} id="password" name="password" className={styles.field} placeholder="Ваш пароль" />
                  <button type="button" className={styles.hide_button} onClick={showButton}>
                    {hide ? <HiddenPassword /> : <ShowPassword />}
                  </button>
                </div>
                <p className={styles.error_message}>
                  <ErrorMessage name="password" />
                </p>
              </div>
              <ControlButton type="submit" color="yellow" width="min-width312" border="no_border" value="Войти" />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
