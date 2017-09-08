﻿import * as React from 'react';
import {
    Link,
    match,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

export class UserNavigation extends React.Component {
    render() {
        return (<div className='user-center-navigation'>
            <ul>
                <CustomLink to={`${location.pathname}`} label='主页' activeOnlyWhenExact={true} myClassName='fa-home' />
            </ul>
        </div>);
    }
}

const CustomLink = ({ label, to, activeOnlyWhenExact = false, myClassName }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <li className={match ? `user-center-navigation-active` : ``}>
            <Link className={`${myClassName}`} to={to}><p>{label}</p></Link>
        </li>
    )} />
);
