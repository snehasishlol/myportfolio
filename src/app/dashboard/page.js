import Dashboard from '@/lib/Dashboard';
import React from 'react';
import { FiHome } from 'react-icons/fi';

export default function DashboardPage() {
  return (
    <>
        <Dashboard
            items={[
                { name: 'Home', icon: FiHome, href: '/' }
            ]}>
            This is your dashboard. On the left you can see the Dashboard Sidebar Items. On the top right are some default buttons and a User menu.
        </Dashboard>
    </>
  )
}
