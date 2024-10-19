import { ButtonProps } from '@/types/Common.types';
import React from 'react';

export const Button: React.FC<ButtonProps> = ({ text, variant }) => {
  const baseClasses = 'px-4 py-2 text-sm font-semibold rounded';
  const filledClasses = 'text-white bg-[#ffad00] border border-[#ffad00] hover:bg-yellow-500';
  const outlinedClasses = 'text-[#ffad00] border border-[#ffad00] hover:bg-[#ffad00] hover:text-white';

  return (
    <button className={`${baseClasses} ${variant === 'filled' ? filledClasses : outlinedClasses}`}>
      {text}
    </button>
  );
};
