/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Sidebar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { HiArrowSmRight, HiChartPie, HiShoppingBag } from 'react-icons/hi';
import { useAuth } from '@/auth';
import { useAtom } from 'jotai';
import { open } from '@/store/drawer';
import { route } from '@/router';

function LayoutSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [, setIsOpen] = useAtom(open);
  const navigateTo = (route: string) => {
    navigate(route);
    setIsOpen(false);
  };
  return (
    <Sidebar aria-label="">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {route
            .filter((item) => !item.index)
            .map((route) => (
              <React.Fragment key={route.path}>
                {route.children?.length == 0 ? (
                  <Sidebar.Item
                    className="cursor-pointer"
                    onClick={() => navigateTo(route.path ?? '')}
                    icon={route.icon ?? HiChartPie} // Replace with your dynamic icon
                  >
                    {route.name}
                  </Sidebar.Item>
                ) : (
                  <Sidebar.Collapse
                    icon={route.icon ?? HiShoppingBag} // Replace with your dynamic icon
                    label={route.name}
                  >
                    {route.children?.map((childRoute: any) => (
                      <Sidebar.Item
                        key={childRoute.path}
                        className="cursor-pointer"
                        onClick={() =>
                          navigateTo(`${route.path}/${childRoute.path}`)
                        }
                      >
                        {childRoute.name}
                      </Sidebar.Item>
                    ))}
                  </Sidebar.Collapse>
                )}
              </React.Fragment>
            ))}
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
