import React from "react";
import { NavLink } from "react-router-dom";

const DepositWithdrawNavigation = ({ active }) => {
    return (
        <div className="bg-white">
            <div className="container d-flex justify-content-center">
                <ul className="nav nav-tabs nav-lg border-bottom-0">
                    <li className="nav-item">
                        <NavLink
                            to="/deposit-money"
                            className={({ isActive }) =>
                                "nav-link" +
                                ((isActive || active === "deposit") ? " active" : "")
                            }
                        >
                            Nạp tiền
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/withdraw-money"
                            className={({ isActive }) =>
                                "nav-link" +
                                ((isActive || active === "withdraw") ? " active" : "")
                            }
                        >
                            Rút tiền
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DepositWithdrawNavigation;
