import React from 'react';
import Link from 'next/link';
import { LinkButtonProps } from '@/types/Common.types';

const LinkButton: React.FC<LinkButtonProps> = ({ text, href, variant = 'yellow', className = '' }) => {
  const baseStyles = 'flex items-center rounded-md font-normal text-[10px] leading-[25px] py-0 px-2';
  const variantStyles = variant === 'yellow'
    ? 'bg-yellow-400 text-white hover:bg-yellow-600'
    : 'bg-orange-400 text-white hover:bg-orange-600';

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`} style={{ paddingLeft: '10px' }}>
      {text} <i className="ml-2 anticon anticon-right">{'>'}</i>
    </Link>
  );
};

export default LinkButton;
