import React from 'react';
import { Link } from 'react-router-dom';
import { route, Routes } from '../../../../core/routing';

const InvoicesOverview = () => {
    return (
        <>
            <h1>Invoices</h1>
            <Link to={route(Routes.InvoicesDetail, { id: 1 })}>Invoice 1</Link>
        </>
    )
}

export default InvoicesOverview;