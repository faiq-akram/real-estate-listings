import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Property } from "../types";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    fetch("https://s3.us-central-1.wasabisys.com/mashvisor-cdn/task-fe-listings.json")
      .then((res) => res.json())
      .then((data: Property[]) => {
        const found = data.find((p) => p.id === Number(id)); 
        setProperty(found || null);
      });
  }, [id]);

  if (!property) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="rounded-2xl mb-4 w-full"
      />
      <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
      <p className="text-lg font-semibold text-blue-600 mb-2">
        ${property.price.toLocaleString()}
      </p>
      <p className="text-gray-600 mb-2">{property.address}</p>
      <p className="mb-4">Bedrooms: {property.bedrooms}</p>
      <p>{property.description}</p>

      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Back to Listings
      </Link>
    </div>
  );
}
