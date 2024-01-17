import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/img/svg/NavbarIcons/logo.svg';
import { ReactComponent as LogoFull } from '../../../assets/img/svg/NavbarIcons/logo_full.svg';
import { ReactComponent as Dashboard } from '../../../assets/img/svg/NavbarIcons/not_activated/dashboard.svg';
import { ReactComponent as Request } from '../../../assets/img/svg/NavbarIcons/not_activated/request.svg';
import { ReactComponent as Candidates } from '../../../assets/img/svg/NavbarIcons/not_activated/candidates.svg';
import { ReactComponent as Statistics } from '../../../assets/img/svg/NavbarIcons/not_activated/statistics.svg';
import { ReactComponent as Settings } from '../../../assets/img/svg/NavbarIcons/not_activated/settings.svg';
import { ReactComponent as Search } from '../../../assets/img/svg/NavbarIcons/not_activated/search.svg';
import { ReactComponent as MovingButton } from '../../../assets/img/svg/NavbarIcons/moving.svg';
import { ReactComponent as Notifications } from '../../../assets/img/svg/NavbarIcons/not_activated/notifications.svg';
import { ReactComponent as Users } from '../../../assets/img/svg/NavbarIcons/not_activated/users.svg';
import { ReactComponent as ActivatedDashboard } from '../../../assets/img/svg/NavbarIcons/activated/dashboard.svg';
import { ReactComponent as ActivatedRequest } from '../../../assets/img/svg/NavbarIcons/activated/request.svg';
import { ReactComponent as ActivatedCandidates } from '../../../assets/img/svg/NavbarIcons/activated/candidates.svg';
import { ReactComponent as ActivatedStatistics } from '../../../assets/img/svg/NavbarIcons/activated/statistics.svg';
import { ReactComponent as ActivatedSettings } from '../../../assets/img/svg/NavbarIcons/activated/settings.svg';
import { ReactComponent as ActivatedSearch } from '../../../assets/img/svg/NavbarIcons/activated/search.svg';
import { ReactComponent as ActivatedNotifications } from '../../../assets/img/svg/NavbarIcons/activated/notifications.svg';
import { ReactComponent as ActivatedUsers } from '../../../assets/img/svg/NavbarIcons/activated/users.svg';
import ava from '../../../assets/img/png/small-icon-png-6.png';
import styles from './Navbar.module.scss';
import NavElement from '../NavElement/NavElement';
import NavPopUpElement from '../NavPopUpElement/NavPopUpElement';

const Navbar = () => {
  const [isSidebarFull, setIsSidebarFull] = useState(false);
  const sideBarWidthHandler = () => {
    setIsSidebarFull(!isSidebarFull);
  };
  return (
    <nav className={`${styles.navbar_container} ${isSidebarFull ? styles.navbar_container_full : ''}`}>
      <div className={styles.navbar_logo}>
        <NavLink to="/" className={`${styles.logo_content} ${isSidebarFull ? styles.logo_content_full : ''}`}>
          {isSidebarFull ? <LogoFull /> : <Logo />}
        </NavLink>
      </div>
      <div className={styles.navbar_top}>
        <NavElement
          menuItem={[<Dashboard />, <ActivatedDashboard />]}
          link="/profile"
          text="Канбан доска"
          isSidebarFull={isSidebarFull}
        />
        <NavElement
          menuItem={[<Request />, <ActivatedRequest />]}
          link="/profile"
          text="Заявки"
          isSidebarFull={isSidebarFull}
        />
        <NavElement
          menuItem={[<Candidates />, <ActivatedCandidates />]}
          link="/candidate_profile"
          text="Кандитаты"
          isSidebarFull={isSidebarFull}
        />
        <NavElement
          menuItem={[<Statistics />, <ActivatedStatistics />]}
          link="/candidate_profile"
          text="Статистика"
          isSidebarFull={isSidebarFull}
        />
        <NavElement
          menuItem={[<Settings />, <ActivatedSettings />]}
          link="/candidate_profile"
          text="Настройки"
          isSidebarFull={isSidebarFull}
        />
        <NavElement
          menuItem={[<Search />, <ActivatedSearch />]}
          link="/candidate_profile"
          text="Поиск кандидата"
          isSidebarFull={isSidebarFull}
        />
      </div>
      <div className={styles.toggleWrapper}>
        <button type="button" className={`${styles.toggle_menu_width_button} ${isSidebarFull && styles.right}`} onClick={sideBarWidthHandler}>
          <MovingButton />
        </button>
      </div>
      <div className={styles.navbar_options}>
        <NavElement
          menuItem={[<Notifications />, <ActivatedNotifications />]}
          link="/notifications"
          text="Уведомления"
          isSidebarFull={isSidebarFull}
        />
        <NavElement
          menuItem={[<Users />, <ActivatedUsers />]}
          link="/login"
          text="Пользователи"
          isSidebarFull={isSidebarFull}
        />
        <NavPopUpElement
          menuItem={ava}
          text="Мой Профиль"
          isSidebarFull={isSidebarFull}
        />
      </div>
    </nav>
  );
};

export default Navbar;
