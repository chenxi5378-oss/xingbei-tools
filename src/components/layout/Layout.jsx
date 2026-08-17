import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(false)} />
      
      <main style={{
        marginLeft: '0',
        marginTop: '56px',
        minHeight: 'calc(100vh - 56px)',
        padding: '16px',
        flex: 1,
        transition: 'margin-left 0.3s ease',
        width: '100%',
        overflowX: 'hidden',
      }}>
        <Outlet />
      </main>
    </div>
  );
}
