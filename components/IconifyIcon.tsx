'use client';

import React from 'react';

interface IconifyIconProps extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  width?: string | number;
  height?: string | number;
  flip?: string;
  rotate?: string;
}

const IconifyIcon: React.FC<IconifyIconProps> = ({ icon, ...props }) => {
  return React.createElement('iconify-icon', { icon, ...props });
};

export default IconifyIcon;

