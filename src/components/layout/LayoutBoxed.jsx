// src/components/layout/LayoutBoxed.jsx
import React from 'react';

const LayoutBoxed = ({ children }) => {
    return (
        <div id="main-wrapper" className="boxed">
            {children}
        </div>
    );
};

export default LayoutBoxed;
