import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface Route {
  index?: boolean;
  path?: string | undefined;
  name?: string;
  icon?: IconType | null;
  element?: ReactNode;
  children?: Route[];
  roles?: string[];
}
