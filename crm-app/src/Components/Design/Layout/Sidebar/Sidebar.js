import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../core/routing';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            
            <ul>
                <li>
                    <Link to={Routes.Projects}>Projects</Link>
                </li>
                <li>
                    <Link to={Routes.Clients}>Clients</Link>
                </li>
                <li>
                    <Link to={Routes.Invoices}>Invoices</Link>
                </li>

            </ul>

        </div>
    )
}

export default Sidebar;