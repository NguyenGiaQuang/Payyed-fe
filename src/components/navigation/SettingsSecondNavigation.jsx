// src/components/navigation/SettingsSecondNavigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const SettingsSecondNavigation = ({ active }) => {
    const items = [
        { key: "account", label: "Tài khoản", to: "/settings-profile" },
        { key: "security", label: "Bảo mật", to: "/settings-security" },
        {
            key: "paymentMethods",
            label: "Phương thức thanh toán",
            to: "/settings-payment-methods",
        },
        { key: "notifications", label: "Thông báo", to: "/settings-notifications" },
    ];

    return (
        <div className="bg-primary">
            <div className="container d-flex justify-content-center">
                <ul className="nav nav-pills alternate nav-lg border-bottom-0">
                    {items.map((item) => (
                        <li className="nav-item" key={item.key}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    "nav-link" +
                                    ((isActive || active === item.key) ? " active" : "")
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

export default SettingsSecondNavigation;
