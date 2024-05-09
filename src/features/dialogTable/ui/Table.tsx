import React, {useMemo, useState} from "react";
import {DialogData} from "../../../entities/dialog/types";
import style from "./style.module.scss";
import {formatDateTime} from "../helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ModalChat from "../../modalChat/ModalChat";


interface TableProps {
    dialogs: DialogData[];
}

interface SortConfig {
    key: keyof DialogData | null;
    direction: 'ascending' | 'descending';
}

const Table = ({dialogs}: TableProps) => {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'ascending' });
    const [selectedDialog, setSelectedDialog] = useState<DialogData | null>(null);
    console.log(selectedDialog, 777)
    const handleRowClick = (dialog: DialogData) => {
        setSelectedDialog(dialog);
    };

    const sortedDialogs = useMemo(() => {
        let sortableItems = [...dialogs];
        if (sortConfig.key) {  // Проверяем, что ключ не null
            sortableItems.sort((a, b) => {
                // @ts-ignore
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                // @ts-ignore
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [dialogs, sortConfig]);

    const requestSort = (key: keyof DialogData) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        // @ts-ignore
        setSortConfig({ key, direction });
    };
    return (
        <div className={style.tableContainer}>
        <table className={style.table}>
            <thead>
            <tr>
                <th>ID</th>
                <th>
                    Start Time
                    <button onClick={() => requestSort('startTime')} className={style.sortButton}>
                        <FontAwesomeIcon icon={sortConfig.key === 'startTime' && sortConfig.direction === 'ascending' ? faChevronUp : faChevronDown} />
                    </button>
                </th>
                <th>
                    Last Message Time
                    <button onClick={() => requestSort('lastMessageTime')} className={style.sortButton}>
                        <FontAwesomeIcon icon={sortConfig.key === 'lastMessageTime' && sortConfig.direction === 'ascending' ? faChevronUp : faChevronDown} />
                    </button>
                </th>
                <th>Company</th>
                <th>Employee</th>
                <th>Comments</th>
            </tr>
            </thead>
            <tbody>
            {sortedDialogs.map(dialog => (
                <tr key={dialog.id} onClick={() => handleRowClick(dialog)}> {/* Обработчик клика на строку */}
                    <td>{dialog.id}</td>
                    <td>{formatDateTime(dialog.startTime)}</td>
                    <td>{formatDateTime(dialog.lastMessageTime)}</td>
                    <td>{dialog.company}</td>
                    <td>{dialog.employee}</td>
                    <td>{dialog.comments}</td>
                </tr>
            ))}
            </tbody>
        </table>
            <ModalChat dialog={selectedDialog} onClose={() => setSelectedDialog(null)} isOpen={!!selectedDialog} />
        </div>
    );
}
export default Table;