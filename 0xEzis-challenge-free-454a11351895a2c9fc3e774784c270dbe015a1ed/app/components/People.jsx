import React from 'react';
import people from '../../public/data/people.json';
import Card from './Card';

const People = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {people.map((person) => (
        <Card
          key={person.id}
          pict={person.icon}
          name={person.name}
          email={person.email}
          review={person.review}
        />
      ))}
    </div>
  );
};

export default People;
