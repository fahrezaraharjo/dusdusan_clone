"use client";

import React from 'react';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import carouselTheme from '../Carousel/carouselTheme';

const infoItems = [
  {
    id: 1,
    title: "Dusdusan.com",
    text: "Platform Komunitas Bisnis Reseller Dropship Online, Supplier Grosir, serta belajar banyak hal positif yang dapat meningkatkan bisnis Anda.",
    imageUrl: "/assets/info1.svg",
    description: "Cara mudah dan murah dengan titip dropship bersama para reseller yang tersebar di seluruh Indonesia. Serta nikmati juga fitur gratis ongkir dengan syarat dan ketentuan yang berlaku.",
  },
  {
    id: 2,
    title: "Dengan menjadi Reseller",
    text: "Anda akan mendapatkan harga reseller yang jauh lebih murah dari harga retail dengan potongan harga hingga 50%.",
    imageUrl: "/assets/info2.svg",
    description: "Dengan menjadi Reseller, tentunya Anda akan mendapatkan harga reseller yang jauh lebih murah dari harga retail dengan potongan harga hingga 50%.",
  },
  {
    id: 3,
    title: "Point Reward",
    text: "Setiap Pembelanjaan, anda bisa mendapatkan point. Point ini dapat anda tukarkan dengan berbagai reward menarik.",
    imageUrl: "/assets/info3.svg",
    description: "Setiap Pembelanjaan, anda bisa mendapatkan point. Point ini dapat anda tukarkan dengan berbagai reward menarik.",
  },
  {
    id: 4,
    title: "Berbagai Hadiah",
    text: "Berbagai hadiah seperti produk, voucher, handphone, motor, mobil hingga umroh bisa Anda dapatkan langsung tanpa diundi di setiap kesempatan.",
    imageUrl: "/assets/info4.svg",
    description: "Berbagai hadiah seperti produk, voucher, handphone, motor, mobil hingga umroh bisa Anda dapatkan langsung tanpa diundi di setiap kesempatan.",
  },
  {
    id: 5,
    title: "Tanpa Target",
    text: "Tidak ada target, tidak ada tutup poin, tidak perlu repot rekrut orang. Saatnya Anda memiliki dan merintis bisnis yang mudah dan menghasilkan.",
    imageUrl: "/assets/info5.svg",
    description: "Tidak ada target, tidak ada tutup poin, tidak perlu repot rekrut orang. Saatnya Anda memiliki dan merintis bisnis yang mudah dan menghasilkan.",
  },
];

const InfoSection: React.FC = () => {
  return (
    <div className="w-full h-full p-6 shadow-lg bg-[#00b0b9] flex flex-col justify-center items-center">
      <div className="relative mb-4">
        <h2 className="title text-base mb-1 font-semibold text-white">{infoItems[0].title}</h2>
        <div className="absolute h-[3px] w-[100px] bg-white bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <p className="text-sm text-white mb-6 text-center">{infoItems[0].text}</p>
      <Carousel slideInterval={5000} theme={carouselTheme} className="rounded-none w-full h-[300px]">
        {infoItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center relative w-full h-full ">
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="mb-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              width={100} 
              height={100}
            />
            <div className="text-center p-4 rounded-lg shadow-sm text-white">
              {item.description}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default InfoSection;