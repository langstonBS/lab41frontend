import React from 'react';
import { useCereal } from '../../Hooks/appContext';

const DisplayResults = () => {
  const cereal = useCereal();

  const cerealElements = cereal.map((cereal) => (
    <section >
    <li key={cereal.id}>
      <p>{cereal.name}</p>
      </li>
    </section>
  ));

  return (
    <ul>
      {cerealElements}
    </ul>
  );
};

export default DisplayResults;



