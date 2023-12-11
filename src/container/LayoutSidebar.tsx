/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Sidebar } from 'flowbite-react';
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
        <Sidebar.Item
          className="cursor-pointer"
          onClick={() => navigateTo(route.path ?? '')}
          icon={getIcon(route)}
        >
          {route.name}
        </Sidebar.Item>
      ) : (
        <Sidebar.Collapse icon={getIcon(route)} label={route.name}>
          {renderRoutes(
            route.children?.filter((item) => !item.index && item.roles?.includes(userRole)),
            navigateTo,
            userRole
          )}
        </Sidebar.Collapse>
      )}
    </React.Fragment>
  ));
}

function getIcon(route: Route): IconType {
  return route.icon as IconType;
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
    <Sidebar aria-label="">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {renderRoutes(filteredRoutes, navigateTo, userRole)}
          <Sidebar.Item
            className="cursor-pointer"
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            icon={HiArrowSmRight}
          >
            logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default LayoutSidebar;
