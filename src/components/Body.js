import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Body = () => {
    return (
        <div className="flex">
            <Sidebar />
            {/* Use the Outlet component from react-router-dom to render the nested routes defined in the parent component */}
            <Outlet />
        </div>
    )
};

export default Body;