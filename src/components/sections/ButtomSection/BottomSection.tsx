import { FooterProps } from '@/interfaces/interfaces';
import { FC } from 'react';

const Footer: FC<FooterProps> = ({ company, support, socialMedia, address, year }) => {
  return (
    <footer className="bg-[#00b0b9] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:justify-between">

        {/* Company Information */}
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl">{company.name}</h3>
          <h2>Kami ada di</h2>
          <p className="text-sm">
            {company.availabilityDays} : {company.availabilityTime}
          </p>
        </div>

        {/* Support Section */}
        <div className="flex flex-col mt-6">
          <h4 className="font-semibold text-lg">Butuh Bantuan?</h4>
          <div className="space-y-2">
            <div className="cursor-pointer transition hover:text-yellow-400">
              {support.chat}
            </div>
            <a
              href={`mailto:${support.email}`}
              className="transition hover:text-yellow-400"
            >
              {support.email}
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 justify-center items-center mt-6 ">
          {socialMedia.map((media) => (
            <a
              key={media.name}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer" // Added for security
              aria-label={media.name}
              className="transition transform hover:scale-110"
            >
              <img
                alt={media.name}
                src={media.icon}
                className="w-10 h-10 hover:brightness-125 transition" // Slightly larger icons for better visibility
              />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 opacity-30 mt-10" />

      {/* Address and Copyright */}
      <div className="mx-auto mt-8 text-center">
        <address className="not-italic text-sm space-y-1 text-gray-200">
          <strong>{address.companyName}</strong><br />
          {address.street}, {address.city}, {address.province}
        </address>
        <div className="text-xs  mt-4 flex justify-center items-center text-gray-300">
          <span>© {year} {company.name}. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
