import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import { route, Routes } from '../../../../core/routing';
import TimeTracker from '../TimeTracker/TimeTracker';

const InvoicesDetail = () => {

    const {id} = useParams();

    return (
        <>
            <h1>Invoice Detail {id}</h1>   

            <Link to={route(Routes.InvoicesDetailAddTime, { id })}>
                Add Time
            </Link>

            <Route path={route(Routes.InvoicesDetailAddTime)}>
                <TimeTracker />
            </Route>
        </>
    )
}

export default InvoicesDetail;