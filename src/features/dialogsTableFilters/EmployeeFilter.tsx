import React, { useState, useRef } from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import useClickOutside from "../../hooks/useClickOutside";

interface EmployeeFilterProps {
    employees: string[];
    onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmployeeFilter: React.FC<EmployeeFilterProps> = ({ employees, onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className={styles.container} ref={dropdownRef}>
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
                Filter by Employee
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className={styles.icon} />
            </button>
            <div className={isOpen ? `${styles.dropdownContent} ${styles.show}` : styles.dropdownContent}>
                {employees.map(employee => (
                    <label key={employee} className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            id={employee}
                            name={employee}
                            value={employee}
                            onChange={onFilterChange}
                        />
                        {employee}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default EmployeeFilter;
