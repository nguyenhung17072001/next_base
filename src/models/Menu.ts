import { ComponentType, ReactElement, ReactNode } from 'react';
//import { SvgIconProps } from '@mui/material';

export interface MenuItem {
  id: string;
  title: string;
  type: 'collapse' | 'item';
  //icon?: ReactElement | ComponentType<SvgIconProps>;
  url?: string;
  children?: MenuItem[];
}
