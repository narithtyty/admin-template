import User from '@/pages/user/User';
import { HiUser } from 'react-icons/hi';
const UserPage = [
  {
    path: '/user',
    name: 'User',
    element: <User />,
    children: [],
    roles: ['user', 'admin'],
    icon: HiUser,
  },
];

export default UserPage;
