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
    icon: CiSettings,
    children: [
      {
        path: 'product',
        name: 'Product',
        element: <Product />,
        children: [],
      },
      {
        path: 'sale',
        name: 'Sale',
        element: (
          <ProtectedRoute requiredRole="admin">
            <Sale />
          </ProtectedRoute>
        ),
        children: [],
      },
      {
        path: 'shipping',
        name: 'Shipping',
        element: <Shipping />,
        children: [],
      },
      {
        path: 'refund',
        name: 'Refund',
        element: <Refund />,
        children: [],
      },
    ],
  },
];

export default SettingPage;
