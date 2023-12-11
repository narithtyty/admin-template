import About from '@/pages/about/About';
import { Route } from '@/interfaces';
import { HiBriefcase } from 'react-icons/hi';
const AboutPage: Route[] = [
  {
    path: '/about',
    name: 'About',
    icon: HiBriefcase,
    element: <About />,
    roles: ['user', 'admin'],
    children: [],
  },
];

export default AboutPage;
