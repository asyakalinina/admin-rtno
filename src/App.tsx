import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./features/layout/Layout";



const UsersPage: React.FC = () => {
    return <h1>Users</h1>;
};



const SettingsPage: React.FC = () => {
    return <h1>Settings</h1>;
};



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
