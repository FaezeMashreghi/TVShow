import { CardProps } from "./Card.types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/constant/routes";

const Card = ({ name, src, rating, id }: CardProps) => {
  return (
    <div className="bg-white rounded shadow-md p-4 min-w-32">
      <img
        src={src}
        alt={`Poster of ${name}`}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-sm text-gray-600">Rating: {rating || "N/A"}</p>

      <Link
        to={ROUTES.SHOW_DETAIL(id)}
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default Card;
