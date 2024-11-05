import React from "react";
import { Link } from "react-router-dom";

const Card = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 p-7 mx-auto">
        {items.map((item) => (
          <Link
            to={{
              pathname: `/product/${item.id}`,
            }}
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#311e0b]">{item.name}</h3>
              <p className="text-[#311e0b]">{item.description}</p>
              <p className="text-lg font-bold text-[#311e0b]">
                Rp. {item.price.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Card;
