import Dashboard from '@/pages/dashboard/Dashboard';
import { HiChartPie } from 'react-icons/hi';
import { Route } from '@/interfaces';
const DashboardPage: Route[] = [
  {
    index: true,
    name: 'dashboard',
    element: <Dashboard />,
    roles: ['user', 'admin'],
    // children : []
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: HiChartPie,
    element: <Dashboard />,
    roles: ['user', 'admin'],
    children: [],
  },
];

export default DashboardPage;
