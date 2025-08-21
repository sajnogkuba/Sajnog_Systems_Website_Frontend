import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-white">
            <Outlet />
        </main>
    </div>
);

export default Layout;