import { ReactElement } from 'react';
import { UserIcon, SettingFeeIcon, PartnerIcon, ReportIcon, TransactionIcon } from 'components/SvgIcon/SvgIcon';
import { MenuItem } from 'models/Menu';
import { v4 as uuid } from 'uuid';

export const menuItems: MenuItem[] = [
  {
    id: uuid(),
    title: 'Quản lý người dùng',
    type: 'collapse',
    icon: UserIcon,
    children: [
      { id: uuid(), title: 'Danh sách người dùng', type: 'item', url: '/users' },
      { id: uuid(), title: 'Phân quyền', type: 'item', url: '/roles' },
      { id: uuid(), title: 'Lịch sử thao tác', type: 'item', url: '/history' },
    ],
  },
  {
    id: uuid(),
    title: 'Quản lý partner',
    type: 'collapse',
    icon: PartnerIcon,
    children: [
      { id: uuid(), title: 'Consumer', type: 'item', url: '/consumers' },
      { id: uuid(), title: 'Provider', type: 'item', url: '/providers' },
    ],
  },
  {
    id: uuid(),
    title: 'Quản lý cấu hình phí',
    type: 'collapse',
    icon: SettingFeeIcon,
    children: [
      { id: uuid(), title: 'Chiết khấu', type: 'item', url: '/discount' },
      { id: uuid(), title: 'Route', type: 'item', url: '/routes' },
    ],
  },
  {
    id: uuid(),
    title: 'Quản lý giao dịch',
    type: 'collapse',
    icon: TransactionIcon,
    url: '/transactions',
  },
  {
    id: uuid(),
    title: 'Báo cáo',
    type: 'collapse',
    icon: ReportIcon,
    url: '/reports',
  },
];
