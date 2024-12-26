import React from "react";
import Card from "../../../../components/Card/Card";
import { ShowCardsGroupProps } from "./ShowCardGroup.types";

const ShowCardsGroup = ({ title, showItems }: ShowCardsGroupProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="flex space-x-4 overflow-x-auto pb-2">
        {showItems.map(({ name, image, rating, id }) => (
          <Card
            key={id}
            name={name}
            src={image?.medium}
            rating={rating.average}
            id={id}
          />
        ))}
      </div>
      <hr className="my-4 border-gray-300" />
    </div>
  );
};

export default ShowCardsGroup;
