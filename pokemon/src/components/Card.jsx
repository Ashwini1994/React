import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
  const name = item.name;
  const modifiedName = name[0].toUpperCase() + name.slice(1);
  const heightInMeter = +(item.height * 0.1).toFixed(2);
  const weightInKg = +(item.weight * 0.1).toFixed(2);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl">
      <Image
        className="w-full h-56 sm:w-full sm:h-48"
        src={item.sprites.other.dream_world.front_default}
        alt={item.id}
        width={70}
        height={70}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{modifiedName}</div>
        <div className="flex flex-col font-semibold text-gray-700 text-base">
          <span>ID: {item.id} </span>
          <span>Height: {heightInMeter} m </span>
          <span>Weight: {weightInKg} kg </span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {item.types.map((type) => (
          <span
            key={type.type.name}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
