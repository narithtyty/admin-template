import Layout from '@/container/Layout';
import DashboardPage from './dashboard';
import UserPage from './user';
import LoginPage from './login';
import AboutPage from './about';
import SettingPage from './setting';
import ProtectedRoute from '@/ProtectedRoute';
import NotFoundPage from './notfound';
import Notfound from '@/pages/notfound/Notfound';
import { Route } from '@/interfaces';

export const route: Route[] = [
  ...DashboardPage,
  ...SettingPage,
  ...UserPage,
  ...AboutPage,
  ...NotFoundPage,
];

export const router = [
  ...LoginPage,
  {
    path: '/',
    name: 'layout',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: route,
  },
  {
    path: '*',
    element: <Notfound />,
  },
];
