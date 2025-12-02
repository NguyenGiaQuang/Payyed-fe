// src/pages/TransactionsPage.jsx
import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/layout/DashboardHeader";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import Footer from "../components/layout/Footer";

import {
    getDefaultAccount,
    getAccountStatement,
} from "../api/account";

const PAGE_SIZE = 7;

// ===== helpers cho ngày =====
const formatDateInput = (d) => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
};

const buildDefaultRange = () => {
    const today = new Date();
    const from = new Date(today);
    from.setDate(from.getDate() - 7); // hôm nay - 7 ngày
    return {
        fromDateStr: formatDateInput(from),
        toDateStr: formatDateInput(today),
    };
};

const toIsoStartOfDay = (dateStr) => {
    // dateStr = "YYYY-MM-DD"
    const d = new Date(`${dateStr}T00:00:00`);
    return d.toISOString();
};

const toIsoEndOfDay = (dateStr) => {
    const d = new Date(`${dateStr}T23:59:59.999`);
    return d.toISOString();
};

const formatDateShort = (iso) => {
    if (!iso) return { day: "--", month: "" };
    const d = new Date(iso);
    const day = String(d.getDate()).padStart(2, "0");
    const monthNames = [
        "TH1",
        "TH2",
        "TH3",
        "TH4",
        "TH5",
        "TH6",
        "TH7",
        "TH8",
        "TH9",
        "TH10",
        "TH11",
        "TH12",
    ];
    const month = monthNames[d.getMonth()];
    return { day, month };
};

const formatDateRangeLabel = (fromIso, toIso) => {
    try {
        const from = new Date(fromIso);
        const to = new Date(toIso);
        const toPad = (n) => String(n).padStart(2, "0");
        const f = `${toPad(from.getDate())}/${toPad(
            from.getMonth() + 1
        )}/${from.getFullYear()}`;
        const t = `${toPad(to.getDate())}/${toPad(
            to.getMonth() + 1
        )}/${to.getFullYear()}`;
        return `${f} - ${t}`;
    } catch {
        return "";
    }
};

const TransactionsPage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [account, setAccount] = useState(null);

    // khoảng thời gian đang dùng (ISO)
    const [filterFrom, setFilterFrom] = useState("");
    const [filterTo, setFilterTo] = useState("");

    // giá trị trong input date (YYYY-MM-DD)
    const defaultRange = buildDefaultRange();
    const [fromDate, setFromDate] = useState(defaultRange.fromDateStr);
    const [toDate, setToDate] = useState(defaultRange.toDateStr);

    const [openingBalance, setOpeningBalance] = useState(0);
    const [closingBalance, setClosingBalance] = useState(0);
    const [items, setItems] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    // ========== LOAD SAO KÊ ==========
    const loadStatement = async (acc, fromDateStr, toDateStr) => {
        if (!acc || !acc.id) return;

        const fromIso = toIsoStartOfDay(fromDateStr);
        const toIso = toIsoEndOfDay(toDateStr);

        const statement = await getAccountStatement({
            accountId: acc.id,
            from: fromIso,
            to: toIso,
        });

        // Account từ statement (có current_balance chuẩn nhất)
        const stmtAccount = statement.account || acc;
        setAccount(stmtAccount);

        setFilterFrom(statement.filter?.from || fromIso);
        setFilterTo(statement.filter?.to || toIso);

        setOpeningBalance(
            typeof statement.opening_balance === "number"
                ? statement.opening_balance
                : Number(statement.opening_balance || 0)
        );
        setClosingBalance(
            typeof statement.closing_balance === "number"
                ? statement.closing_balance
                : Number(statement.closing_balance || 0)
        );

        // sort giao dịch: MỚI → CŨ (date giảm dần)
        const sortedItems = (statement.items || [])
            .slice()
            .sort(
                (a, b) =>
                    new Date(b.date).getTime() -
                    new Date(a.date).getTime()
            );
        setItems(sortedItems);
        setCurrentPage(1);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // 1. Lấy tài khoản mặc định
                const defaultAcc = await getDefaultAccount();
                if (!defaultAcc || !defaultAcc.id) {
                    setError(
                        "Bạn chưa có tài khoản mặc định, không thể xem lịch sử giao dịch."
                    );
                    setLoading(false);
                    return;
                }

                setAccount(defaultAcc);

                // 2. Lấy sao kê với khoảng mặc định (hôm nay - 7 ngày)
                await loadStatement(
                    defaultAcc,
                    defaultRange.fromDateStr,
                    defaultRange.toDateStr
                );
            } catch (err) {
                console.error(err);
                setError("Không tải được lịch sử giao dịch.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ========== PHÂN TRANG ==========
    const filteredItems = items; // chuẩn bị nếu sau này filter thêm

    const totalPages = Math.max(
        1,
        Math.ceil(filteredItems.length / PAGE_SIZE)
    );

    const safePage = Math.min(
        Math.max(currentPage, 1),
        totalPages || 1
    );
    const startIndex = (safePage - 1) * PAGE_SIZE;
    const currentItems = filteredItems.slice(
        startIndex,
        startIndex + PAGE_SIZE
    );

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const handleFilterSubmit = async (e) => {
        e.preventDefault();
        if (!account) return;
        try {
            setLoading(true);
            setError(null);
            await loadStatement(account, fromDate, toDate);
        } catch (err) {
            console.error(err);
            setError("Không tải được lịch sử giao dịch.");
        } finally {
            setLoading(false);
        }
    };

    const renderTransactionRows = () => {
        if (loading) {
            return (
                <div className="px-4 py-3 text-muted">
                    Đang tải giao dịch...
                </div>
            );
        }

        if (error) {
            return (
                <div className="px-4 py-3 text-danger">{error}</div>
            );
        }

        if (!currentItems.length) {
            return (
                <div className="px-4 py-3 text-muted">
                    Không có giao dịch nào trong khoảng thời gian đã
                    chọn.
                </div>
            );
        }

        return currentItems.map((item) => {
            const { day, month } = formatDateShort(item.date);
            const isOut = item.direction === "OUT";
            const sign = isOut ? "-" : "+";

            const rawAmount =
                typeof item.delta === "number"
                    ? Math.abs(item.delta)
                    : Number(item.amount || 0);
            const formattedAmount =
                new Intl.NumberFormat("vi-VN").format(rawAmount);
            const amountClass = isOut ? "text-danger" : "text-success";

            return (
                <div
                    key={item.id}
                    className="transaction-item px-4 py-3"
                    style={{ cursor: "pointer" }}
                >
                    <div className="row align-items-center flex-row">
                        <div className="col-2 col-sm-1 text-center">
                            <span className="d-block text-4 fw-300">
                                {day}
                            </span>
                            <span className="d-block text-1 fw-300 text-uppercase">
                                {month}
                            </span>
                        </div>

                        <div className="col col-sm-7">
                            <span className="d-block text-4">
                                {item.description || "Giao dịch"}
                            </span>
                            <span className="text-muted d-block">
                                {item.dc === "DEBIT"
                                    ? "Ghi nợ tài khoản"
                                    : item.dc === "CREDIT"
                                        ? "Ghi có tài khoản"
                                        : ""}
                            </span>
                            {typeof item.balance_after === "number" && (
                                <span className="text-muted text-2 d-block">
                                    Số dư sau giao dịch:{" "}
                                    {new Intl.NumberFormat(
                                        "vi-VN"
                                    ).format(item.balance_after)}{" "}
                                    {account?.currency || "VND"}
                                </span>
                            )}
                        </div>

                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                            <span
                                className="text-success"
                                title="Hoàn tất"
                            >
                                <i className="fas fa-check-circle" />
                            </span>
                        </div>

                        <div className="col-3 col-sm-2 text-end text-4">
                            <span className={`${amountClass} text-nowrap`}>
                                {sign} {formattedAmount}
                            </span>{" "}
                            <span className="text-2 text-uppercase">
                                ({account?.currency || "VND"})
                            </span>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const renderPagination = () => {
        if (filteredItems.length <= PAGE_SIZE) {
            return null;
        }

        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li
                    key={i}
                    className={`page-item${i === safePage ? " active" : ""
                        }`}
                >
                    <a
                        className="page-link"
                        href="#!"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(i);
                        }}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        return (
            <ul className="pagination justify-content-center mt-4 mb-0">
                <li className={`page-item${safePage === 1 ? " disabled" : ""}`}>
                    <a
                        className="page-link"
                        href="#!"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(safePage - 1);
                        }}
                    >
                        <i className="fas fa-angle-left" />
                    </a>
                </li>

                {pages}

                <li
                    className={`page-item${safePage === totalPages ? " disabled" : ""
                        }`}
                >
                    <a
                        className="page-link"
                        href="#!"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(safePage + 1);
                        }}
                    >
                        <i className="fas fa-angle-right" />
                    </a>
                </li>
            </ul>
        );
    };

    const dateRangeLabel =
        filterFrom && filterTo
            ? formatDateRangeLabel(filterFrom, filterTo)
            : "";

    // Số dư hiện tại: dùng statement.account.current_balance cho đúng
    const currentBalanceNumber = Number(
        account?.current_balance || 0
    );

    return (
        <div id="main-wrapper">
            <DashboardHeader active="transactions" />

            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <DashboardSidebar />

                        <div className="col-lg-9">
                            <h2 className="fw-400 mb-3">
                                Lịch sử giao dịch
                            </h2>

                            {/* Thông tin tài khoản + khoảng thời gian */}
                            <div className="bg-white shadow-sm rounded p-3 mb-3">
                                {account ? (
                                    <>
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <div>
                                                <div className="text-muted text-2">
                                                    Tài khoản
                                                </div>
                                                <div className="fw-500">
                                                    {account.account_no}{" "}
                                                    (
                                                    {account.currency ||
                                                        "VND"}
                                                    )
                                                </div>
                                                <div className="text-muted text-2">
                                                    Trạng thái:{" "}
                                                    {account.status}
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <div className="text-muted text-2">
                                                    Số dư hiện tại
                                                </div>
                                                <div className="fw-500">
                                                    {new Intl.NumberFormat(
                                                        "vi-VN"
                                                    ).format(
                                                        currentBalanceNumber
                                                    )}{" "}
                                                    {account.currency ||
                                                        "VND"}
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="my-3" />

                                        <div className="d-flex flex-wrap justify-content-between text-2">
                                            <div>
                                                Khoảng thời gian:{" "}
                                                <strong>
                                                    {dateRangeLabel ||
                                                        "—"}
                                                </strong>
                                            </div>
                                            <div className="text-end">
                                                Số dư đầu kỳ:{" "}
                                                <strong>
                                                    {new Intl.NumberFormat(
                                                        "vi-VN"
                                                    ).format(
                                                        openingBalance || 0
                                                    )}{" "}
                                                    {account.currency ||
                                                        "VND"}
                                                </strong>
                                                <br />
                                                Số dư cuối kỳ:{" "}
                                                <strong>
                                                    {new Intl.NumberFormat(
                                                        "vi-VN"
                                                    ).format(
                                                        closingBalance || 0
                                                    )}{" "}
                                                    {account.currency ||
                                                        "VND"}
                                                </strong>
                                            </div>
                                        </div>
                                    </>
                                ) : loading ? (
                                    <span className="text-muted">
                                        Đang tải tài khoản...
                                    </span>
                                ) : error ? (
                                    <span className="text-danger">
                                        {error}
                                    </span>
                                ) : null}
                            </div>

                            {/* BỘ LỌC – CHỌN THỜI GIAN */}
                            <div className="row">
                                <div className="col mb-2">
                                    <form
                                        id="filterTransactions"
                                        onSubmit={handleFilterSubmit}
                                    >
                                        <div className="row g-3 mb-3">
                                            {/* Date From */}
                                            <div className="col-sm-6 col-md-3">
                                                <label
                                                    htmlFor="fromDate"
                                                    className="form-label text-2 mb-1"
                                                >
                                                    Từ ngày
                                                </label>
                                                <input
                                                    id="fromDate"
                                                    type="date"
                                                    className="form-control"
                                                    value={fromDate}
                                                    onChange={(e) =>
                                                        setFromDate(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            {/* Date To */}
                                            <div className="col-sm-6 col-md-3">
                                                <label
                                                    htmlFor="toDate"
                                                    className="form-label text-2 mb-1"
                                                >
                                                    Đến ngày
                                                </label>
                                                <input
                                                    id="toDate"
                                                    type="date"
                                                    className="form-control"
                                                    value={toDate}
                                                    onChange={(e) =>
                                                        setToDate(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            {/* Khoảng hiển thị (read-only) */}
                                            <div className="col-sm-6 col-md-4">
                                                <label className="form-label text-2 mb-1">
                                                    Khoảng đang hiển thị
                                                </label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                        value={
                                                            dateRangeLabel
                                                        }
                                                    />
                                                    <span className="icon-inside">
                                                        <i className="fas fa-calendar-alt" />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Nút Lọc */}
                                            <div className="col-sm-6 col-md-2 d-flex align-items-end">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary w-100"
                                                    disabled={loading}
                                                >
                                                    Lọc
                                                </button>
                                            </div>

                                            {/* Statements dropdown – UI giữ nguyên */}
                                            <div className="col-12 d-flex justify-content-end">
                                                <div className="dropdown">
                                                    <a
                                                        className="text-muted btn-link"
                                                        href="#!"
                                                        role="button"
                                                        id="statements"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="fas fa-file-download text-3 me-1" />
                                                        Xuất sao kê
                                                    </a>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="statements"
                                                    >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#!"
                                                        >
                                                            CSV
                                                        </a>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#!"
                                                        >
                                                            PDF
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* KHỐI RADIO FILTER – chỉ UI, sau này có thể nối filter direction */}
                                            <div
                                                className="col-12 collapse"
                                                id="allFilters"
                                            >
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="allTransactions"
                                                        name="allFilters"
                                                        defaultChecked
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="allTransactions"
                                                    >
                                                        Tất cả giao dịch
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="paymentsSend"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="paymentsSend"
                                                    >
                                                        Giao dịch gửi đi
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="paymentsReceived"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="paymentsReceived"
                                                    >
                                                        Giao dịch nhận
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="refunds"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="refunds"
                                                    >
                                                        Hoàn tiền
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="withdrawal"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="withdrawal"
                                                    >
                                                        Rút tiền
                                                    </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="deposit"
                                                        name="allFilters"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="deposit"
                                                    >
                                                        Nạp tiền
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* DANH SÁCH GIAO DỊCH (DATA THẬT) */}
                            <div className="bg-white shadow-sm rounded py-4 mb-4">
                                <h3 className="text-5 fw-400 d-flex align-items-center px-4 mb-4">
                                    Tất cả giao dịch
                                </h3>

                                {/* Tiêu đề cột */}
                                <div className="transaction-title py-2 px-4">
                                    <div className="row">
                                        <div className="col-2 col-sm-1 text-center">
                                            <span>Ngày</span>
                                        </div>
                                        <div className="col col-sm-7">
                                            Mô tả
                                        </div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center">
                                            Trạng thái
                                        </div>
                                        <div className="col-3 col-sm-2 text-end">
                                            Số tiền
                                        </div>
                                    </div>
                                </div>

                                {/* LIST ITEM */}
                                <div className="transaction-list">
                                    {renderTransactionRows()}
                                </div>

                                {/* PHÂN TRANG */}
                                {renderPagination()}
                            </div>
                        </div>
                        {/* END MIDDLE */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TransactionsPage;
