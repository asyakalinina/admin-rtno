import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from "./style.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

function AdminSidebar() {
    const sections = [
        { path: '/dashboard', icon: faTachometerAlt, label: 'Dashboard' },
        { path: '/users', icon: faUsers, label: 'Users' },
        { path: '/settings', icon: faCog, label: 'Settings' }
    ];

    const location = useLocation();

    return (
        <div className={styles.adminSidebar}>
            <div className={styles.logoWrapper}>
                <div className={styles.logo}>RTNO</div>
                <div className={styles.adminText}>admin</div>
            </div>
            <ul>
                {sections.map(section => (
                    <li key={section.path} className={location.pathname === section.path ? styles.activeListItem : ""}>
                        <NavLink
                            to={section.path}
                            className={styles.link}
                        >
                            <FontAwesomeIcon icon={section.icon} className={`${styles.icon} ${location.pathname === section.path ? styles.activeIcon : ""}`} />
                            {section.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className={styles.footer}>
                <p className={styles.developedBy}>Developed by Asya</p>
            </div>
        </div>
    );
}

export default AdminSidebar;
