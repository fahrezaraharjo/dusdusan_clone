import { FooterProps } from '@/interfaces/interfaces';
import { FC } from 'react';

const Footer: FC<FooterProps> = ({ company, support, socialMedia, address, year }) => {
  return (
    <footer className="bg-[#00b0b9] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Information */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-xl">{company.name}</h3>
          <p className="text-sm">
            {company.availabilityDays} : {company.availabilityTime}
          </p>
        </div>

        {/* Support Section */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-lg">Need Assistance?</h4>
          <div className="space-y-1">
            <div className="cursor-pointer text-white transition hover:text-yellow-400">
              {support.chat}
            </div>
            <a
              href={`mailto:${support.email}`}
              className="text-yellow-400 hover:underline transition hover:text-yellow-300"
            >
              {support.email}
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 justify-start md:justify-end items-center">
          {socialMedia.map((media) => (
            <a
              key={media.name}
              href={media.url}
              target="_blank"
              aria-label={media.name}
              className="transition transform hover:scale-110"
            >
              <img
                alt={media.name}
                src={media.icon}
                className="w-8 h-8 hover:brightness-125"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 opacity-30 mt-8" />

      {/* Address and Copyright */}
      <div className="max-w-7xl mx-auto mt-8 text-center md:text-left">
        <address className="not-italic text-sm md:text-base space-y-1 text-gray-200">
          <strong>{address.companyName}</strong><br />
          {address.street}, {address.city}, {address.province}
        </address>
        <div className="text-xs md:text-sm mt-4 flex justify-center md:justify-start items-center text-gray-300">
          <span>Copyright</span>
          <img
            src="/assets/images/c7a4d9430949f283813b22fe0a7aa2b4.png"
            alt="copyright"
            className="w-4 h-4 mx-2"
          />
          <span>{year} {company.name}. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
