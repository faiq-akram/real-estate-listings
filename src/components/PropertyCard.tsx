import { Link } from "react-router-dom";
import type { Property } from "../types";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      to={`/property/${property.id}`}
      className="block bg-white rounded-2xl shadow hover:shadow-xl hover:scale-105 transition p-4"
    >
      <img
        src={property.image}
        alt={property.title}
        className="rounded-lg mb-3 w-full h-48 object-cover"
      />
      <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
      <p className="text-blue-600 font-bold">${property.price}</p>
      <p className="text-sm text-gray-500">
        {property.bedrooms} Beds • {property.address}
      </p>
    </Link>
  );
}
