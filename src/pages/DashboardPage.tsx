import React, {useEffect, useState} from "react";
import {DialogData} from "../entities/dialog/types";
import {fetchDialogData} from "../entities/dialog/api";
import Table from "../features/dialogTable/ui/Table";
import EmployeeFilter from "../features/dialogsTableFilters/EmployeeFilter";
import CompanyFilter from "../features/dialogsTableFilters/CompanyFilter";
import style from "./style.module.scss";
import ChatCalendarChart from "../features/dialogCalendarChart/ChatCalendarChart";
import {transformToChartData} from "../features/dialogCalendarChart/helpers";

const DashboardPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [dialogs, setDialogs] = useState<DialogData[]>([]);
    const [filteredDialogs, setFilteredDialogs] = useState<DialogData[]>([]);
    const [activeCompanyFilters, setActiveCompanyFilters] = useState<Set<string>>(new Set());
    const [activeEmployeeFilters, setActiveEmployeeFilters] = useState<Set<string>>(new Set());
    const [chartCompanyFilters, setChartCompanyFilters] = useState<Set<string>>(new Set());

    useEffect(() => {
        fetchDialogData().then(data => {
            setDialogs(data);
            setFilteredDialogs(data);
            setLoading(false);
        });
    }, []);

    const handleCompanyFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSet = new Set(activeCompanyFilters);
        if (event.target.checked) {
            newSet.add(event.target.value);
        } else {
            newSet.delete(event.target.value);
        }
        setActiveCompanyFilters(newSet);
        applyFilters(newSet, activeEmployeeFilters);
    };

    const handleChartCompanyFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setChartCompanyFilters(newSet => {
            const updatedSet = new Set(newSet);
            if (event.target.checked) {
                updatedSet.add(value);
            } else {
                updatedSet.delete(value);
            }
            return updatedSet;
        });
    };

    const handleEmployeeFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSet = new Set(activeEmployeeFilters);
        if (event.target.checked) {
            newSet.add(event.target.value);
        } else {
            newSet.delete(event.target.value);
        }
        setActiveEmployeeFilters(newSet);
        applyFilters(activeCompanyFilters, newSet);
    };

    const applyFilters = (companyFilters: Set<string>, employeeFilters: Set<string>) => {
        let newFilteredDialogs = dialogs.filter(dialog =>
            (companyFilters.size === 0 || companyFilters.has(dialog.company)) &&
            (employeeFilters.size === 0 || employeeFilters.has(dialog.employee))
        );
        setFilteredDialogs(newFilteredDialogs);
    };

    const filteredChartData = transformToChartData(dialogs.filter(dialog =>
        chartCompanyFilters.size === 0 || chartCompanyFilters.has(dialog.company)
    ));

    const handleResetTableFilters = () => {
        setActiveCompanyFilters(new Set());
        setActiveEmployeeFilters(new Set());
        setFilteredDialogs(dialogs);
    };

    const handleResetChartFilters = () => {
        setChartCompanyFilters(new Set());
    };

    return (
        <div className={style.wrap}>
            {loading ? ( // Если данные загружаются, отобразить лоадер
                <div>Loading...</div>
            ) : (
                <>
                    <div className={style.block}>
                        <div className={style.titleDescWrapper}>
                            <h2 className={style.title}>Dialogs Table</h2>
                            <p>This section displays a table of dialogs, allowing you to view and filter
                                conversations.</p>
                        </div>
                        <div className={style.contentWrapper}>
                            <div className={style.filters}>
                                <CompanyFilter companies={Array.from(new Set(dialogs.map(dialog => dialog.company)))}
                                               onFilterChange={handleCompanyFilterChange}/>
                                <EmployeeFilter employees={Array.from(new Set(dialogs.map(dialog => dialog.employee)))}
                                                onFilterChange={handleEmployeeFilterChange}/>
                                <button className={style.resetButton} onClick={handleResetTableFilters}>Reset Table
                                    Filters
                                </button>
                            </div>
                            <Table dialogs={filteredDialogs}/>
                        </div>
                    </div>
                    <div className={style.block}>
                        <div className={style.titleDescWrapper}>
                            <h2 className={style.title}>Chat Calendar</h2>
                            <p>Here you can see a calendar chart displaying the number of chats per day.</p>
                        </div>
                        <div className={style.contentWrapper}>
                            <div className={style.filters}>
                                <CompanyFilter companies={Array.from(new Set(dialogs.map(dialog => dialog.company)))}
                                               onFilterChange={handleChartCompanyFilterChange}/>
                                <button className={style.resetButton} onClick={handleResetChartFilters}>Reset Chart
                                    Filters
                                </button>
                            </div>
                            <ChatCalendarChart chatData={filteredChartData}/>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default DashboardPage;
