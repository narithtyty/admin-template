import Dashboard from '@/pages/dashboard/Dashboard';
import { HiChartPie } from 'react-icons/hi';
import { Route } from '@/interfaces';
const DashboardPage: Route[] = [
  {
    index: true,
    name: 'dashboard',
    element: <Dashboard />,
    // children : []
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: HiChartPie,
    element: <Dashboard />,
    children: [],
  },
];

export default DashboardPage;
