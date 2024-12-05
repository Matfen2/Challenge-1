import React from 'react';
import Image from 'next/image';
import logoSpike from '../../public/picts/Spikes Logo.png';

const Header = () => {
  return (
    <div
      className="h-64 flex items-center justify-center"
      style={{
        backgroundImage: "url('/picts/VectorUp.png')", 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center space-x-4 absolute top-10 left-50">
        <Image src={logoSpike} className='-mt-50' alt="Spikes Logo" width={150} height={50} />
      </div>
    </div>
  );
};

export default Header;
