import React, { ReactNode } from 'react';
import {

  Accordion,
  AccordionHeader,
  AccordionBody,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';
import { useAuth } from '@/auth';
import { useAtom } from 'jotai';
import { open } from '@/store/drawer';
import { route } from '@/router';
import { Route } from '@/interfaces';
import { IconType } from 'react-icons';

function renderRoutes(
  routes: Route[] | undefined,
  navigateTo: (route: string) => void,
  userRole: string
) {
  return routes?.map((route: Route) => (
    <React.Fragment key={route.path}>
      {route.children?.length === 0 ? (
        <ListItem
          className="cursor-pointer"
          onClick={() => navigateTo(route.path ?? '')}
        >
          <ListItemPrefix>{getIcon(route) as ReactNode}</ListItemPrefix>
          {route.name}
        </ListItem>
      ) : (
        <Accordion open>
          <AccordionHeader>
            <ListItemPrefix>{getIcon(route) as ReactNode}</ListItemPrefix>
            {route.name}
          </AccordionHeader>
          <AccordionBody>
            {renderRoutes(
              route.children?.filter((item) => !item.index && item.roles?.includes(userRole)),
              navigateTo,
              userRole
            )}
          </AccordionBody>
        </Accordion>
      )}
    </React.Fragment>
  ));
}

function getIcon(route: Route) {
  return route.icon;
}

function LayoutSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [, setIsOpen] = useAtom(open);

  const userRole = localStorage.getItem('role') ?? '';

  const navigateTo = (route: string) => {
    navigate(route);
    setIsOpen(false);
  };

  const filteredRoutes = route.filter((item) => !item.index && item.roles?.includes(userRole));

  return (
    <div>
      <List>
        {renderRoutes(filteredRoutes, navigateTo, userRole)}
        <ListItem
          className="cursor-pointer"
          onClick={() => {
            logout();
            setIsOpen(false);
          }}
        >
          <ListItemPrefix><HiArrowSmRight /></ListItemPrefix>
          logout
        </ListItem>
      </List>
    </div>
  );
}

export default LayoutSidebar;
