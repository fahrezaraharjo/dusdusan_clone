"use client";

import { FooterNavItemProps } from '@/types/Footer.types';
import { FC, useState } from 'react';
import { FaHome, FaHeart, FaShoppingCart, FaUser, FaList } from 'react-icons/fa';

const FooterNav: FC = () => {
  const [active, setActive] = useState<string>('Beranda');

  return (
    <div className='w-full flex justify-center shadow-lg'>
      <nav className="bg-[#01b0b9] text-white flex justify-around items-center h-16 shadow-lg z-50 max-w-[480px] w-full sticky bottom-0">
        {navItems.map(item => (
          <FooterNavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={active}
            setActive={setActive}
          />
        ))}
      </nav>
    </div>
  );
};

const navItems = [
  { icon: <FaHome />, label: 'Beranda' },
  { icon: <FaHeart />, label: 'Favorite' },
  { icon: <FaList />, label: 'Katalog' },
  { icon: <FaShoppingCart />, label: 'Keranjang' },
  { icon: <FaUser />, label: 'Profile' },
];

const FooterNavItem: FC<FooterNavItemProps> = ({ icon, label, active, setActive }) => {
  return (
    <div
      onClick={() => setActive(label)}
      className={`flex flex-col items-center text-sm transition-colors duration-300 cursor-pointer ${active === label ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
        }`}
    >
      <div className="text-xl mb-1">{icon}</div>
      <span>{label}</span>
    </div>
  );
};

export default FooterNav;
