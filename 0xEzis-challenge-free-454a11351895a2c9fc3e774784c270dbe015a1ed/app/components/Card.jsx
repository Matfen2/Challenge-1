import React from 'react';
import Image from 'next/image';

const Card = ({ pict, name, email, review }) => {
  return (
    <div
      className="border rounded-sm px-6 py-4"
      style={{
        width: "287px",
        height: "160px",
        backgroundColor: "var(--foreground)",
        border: "1px solid hsla(260, 93%, 17%, 1)",
      }}
    >
      <div className="flex flex-row items-center space-x-4">
        <Image src={pict} alt={name} width={50} height={50} />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <span style={{ color: "hsla(241, 32%, 74%, 1)" }}>{email}</span>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-300">{review}</p>
    </div>
  );
};

export default Card;
