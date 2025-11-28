import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage.jsx";
import LandingSendPage from "../pages/LandingSendPage.jsx";
import LandingReceivePage from "../pages/LandingReceivePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import FeesPage from "../pages/FeesPage.jsx";
import HelpPage from "../pages/HelpPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import ContactUsPage from "../pages/ContactUsPage.jsx";
import Error404Page from "../pages/Error404Page.jsx";
import DashboardPage from "../pages/DashboardPage";
import TransactionsPage from "../pages/TransactionsPage.jsx";
import SendMoneyPage from "../pages/SendMoneyPage.jsx";
import RequestMoneyPage from "../pages/RequestMoneyPage.jsx";
import DepositMoneyPage from "../pages/DepositMoneyPage.jsx";
import WithdrawMoneyPage from "../pages/WithdrawMoneyPage.jsx";
import NotificationsPage from "../pages/NotificationsPage.jsx";
import SettingsProfilePage from "../pages/SettingsProfilePage.jsx";
import SettingsSecurityPage from "../pages/SettingsSecurityPage.jsx";
import SettingsPaymentMethodsPage from "../pages/SettingsPaymentMethodsPage.jsx";
import SettingsNotificationsPage from "../pages/SettingsNotificationsPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/landing-send" element={<LandingSendPage />} />
            <Route path="/landing-receive" element={<LandingReceivePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/dashboard" element={<PrivateRoute> <DashboardPage /> </PrivateRoute>} />
            <Route path="/transactions" element={<PrivateRoute> <TransactionsPage /> </PrivateRoute>} />
            <Route path="/send-money" element={<PrivateRoute> <SendMoneyPage /> </PrivateRoute>} />
            <Route path="/request-money" element={<PrivateRoute> <RequestMoneyPage /> </PrivateRoute>} />
            <Route path="/deposit-money" element={<PrivateRoute> <DepositMoneyPage /> </PrivateRoute>} />
            <Route path="/withdraw-money" element={<PrivateRoute> <WithdrawMoneyPage /> </PrivateRoute>} />
            <Route path="/notifications" element={<PrivateRoute> <NotificationsPage /> </PrivateRoute>} />
            <Route path="/settings-profile" element={<PrivateRoute> <SettingsProfilePage /> </PrivateRoute>} />
            <Route path="/settings-security" element={<PrivateRoute> <SettingsSecurityPage /> </PrivateRoute>} />
            <Route path="/settings-payment-methods" element={<PrivateRoute> <SettingsPaymentMethodsPage /> </PrivateRoute>} />
            <Route path="/settings-notifications" element={<PrivateRoute> <SettingsNotificationsPage /> </PrivateRoute>} />
            <Route path="*" element={<Error404Page />} />
        </Routes>
    );
};

export default AppRouter;
