// src/components/navigation/SecondNavigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const SecondNavigation = ({ active }) => {
    const items = [
        { key: 'send', label: 'Gửi tiền', to: '/send-money' },
        { key: 'request', label: 'Yêu cầu thanh toán', to: '/request-money' },
    ];

    return (
        <div className="bg-primary">
            <div className="container d-flex justify-content-center">
                <ul className="nav nav-pills alternate nav-lg border-bottom-0">
                    {items.map(item => (
                        <li className="nav-item" key={item.key}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    'nav-link' + (isActive || active === item.key ? ' active' : '')
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SecondNavigation;
