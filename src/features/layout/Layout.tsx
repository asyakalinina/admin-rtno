// src/components/Layout.tsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AdminSidebar from "../navigation/ui/AdminSidebar";
import style from "./style.module.scss";

const Layout: React.FC = () => {
    return (
        <div className={style.wrap}>
            <div className={style.sidebar}>
                <AdminSidebar />
            </div>
                <div className={style.content}>
                    <Outlet />
                </div>
        </div>
    );
};


export default Layout;
