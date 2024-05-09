import React, { useState, useRef } from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import useClickOutside from '../../hooks/useClickOutside';

interface CompanyFilterProps {
    companies: string[];
    onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CompanyFilter: React.FC<CompanyFilterProps> = ({ companies, onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className={styles.container} ref={dropdownRef}>
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
                Filter by Company
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className={styles.icon} />
            </button>
            <div className={isOpen ? `${styles.dropdownContent} ${styles.show}` : styles.dropdownContent}>
                {companies.map(company => (
                    <label key={company} className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            id={company}
                            name={company}
                            value={company}
                            onChange={onFilterChange}
                        />
                        {company}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CompanyFilter;
