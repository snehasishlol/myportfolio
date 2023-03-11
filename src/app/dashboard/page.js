import Dashboard from '@/lib/Dashboard';
import React from 'react';
import { FiGrid, FiHome } from 'react-icons/fi';

export default function DashboardPage() {
	return (
		<>
			<Dashboard
				items={[
					{ name: 'Home', icon: <FiHome />, href: '/', active: false },
					{ name: 'Dashboard', icon: <FiGrid />, href: '/dashboard', active: true }
				]}>
				This is your dashboard. On the left you can see the Dashboard Sidebar Items. On the top right are some default buttons and a User menu.
			</Dashboard>
		</>
	)
}
