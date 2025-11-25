// src/components/common/PageHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({
    title,
    breadcrumb = [],
    align = 'left',        // 'left' | 'center'
    theme = 'dark',        // 'dark' | 'light' | 'primary'
}) => {
    let themeClass = 'bg-dark-3 page-header-text-light';
    if (theme === 'light') themeClass = 'bg-light page-header-text-dark';
    if (theme === 'primary') themeClass = 'bg-primary page-header-text-light';

    const titleColClasses =
        align === 'center'
            ? 'col-12 text-center'
            : 'col-md-8';
    const breadcrumbColClasses =
        align === 'center'
            ? 'col-12'
            : 'col-md-4';

    const breadcrumbClass =
        'breadcrumb mb-0 ' +
        (align === 'center'
            ? 'justify-content-center'
            : 'justify-content-start justify-content-md-end');

    return (
        <section className={`page-header ${themeClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className={titleColClasses}>
                        <h1>{title}</h1>
                    </div>
                    {breadcrumb.length > 0 && (
                        <div className={breadcrumbColClasses}>
                            <ul className={breadcrumbClass}>
                                {breadcrumb.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={item.to ? '' : 'active'}
                                    >
                                        {item.to ? (
                                            <Link to={item.to}>{item.label}</Link>
                                        ) : (
                                            item.label
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
