import React from 'react';
import Items from './Items';

export default function ConItemes({ data, handleDelete }) {

  return (
    <div className="w-full pb-10 p-5 items-center h-max">
      {data.map((d, i) => (
        <Items key={i} id={d.id} d={d} onDelete={() => handleDelete(i)} />
      ))}
    </div>
  );
}
