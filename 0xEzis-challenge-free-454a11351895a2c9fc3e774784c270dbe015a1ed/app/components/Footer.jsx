import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Footer = () => {
  return (
    <div className="h-64 flex items-center justify-center" style={{ backgroundImage: "url('/picts/VectorUp.png')", backgroundSize: "cover" }}>
      <div className='flex items-center space-x-4' >
        <button type="button" className="px-7 py-2 bg-transparent rounded-full flex items-center justify-center d-block mt-auto" style={{ border: "2px solid hsla(260, 93%, 17%, 1)" }} >
        <a href="https://www.spikes.dev" target="_blank" rel="noopener noreferrer" className="text-white font-semibold flex items-center">
          www.spikes.dev <GoArrowRight className="ml-2" />
        </a>
      </button>
      </div>
    </div>
  );
};

export default Footer;
