import Product from '@/pages/setting/Product';
import Sale from '@/pages/setting/Sale';
import Shipping from '@/pages/setting/Shipping';
import Refund from '@/pages/setting/Refund';
import ProtectedRoute from '@/ProtectedRoute';
import { Route } from '@/interfaces';
import { CiSettings } from 'react-icons/ci';
const SettingPage: Route[] = [
  {
    path: '/setting',
    name: 'Setting',
    roles: ['user', 'admin'],
    icon: CiSettings,
    children: [
      {
        path: '/setting/product',
        name: 'Product',
        element: <Product />,
        roles: ['user', 'admin'],
        children: [],
      },
      {
        path: '/setting/sale',
        name: 'Sale',
        element: (
          <ProtectedRoute requiredRoles={['admin']}>
            <Sale />
          </ProtectedRoute>
        ),
        roles: ['admin'],
        children: [],
      },
      {
        path: '/setting/shipping',
        name: 'Shipping',
        element: <Shipping />,
        roles: ['user', 'admin'],
        children: [],
      },
      {
        path: '/setting/refund',
        name: 'Refund',
        element: <Refund />,
        roles: ['user', 'admin'],
        children: [],
      },
    ],
  },
];

export default SettingPage;
