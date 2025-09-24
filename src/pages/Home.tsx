import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";
import FilterSort from "../components/FilterSort";
import type { Property } from '../types';

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filtered, setFiltered] = useState<Property[]>([]);
  const [search, setSearch] = useState("");
  const [minBeds, setMinBeds] = useState(0);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch(
      "https://s3.us-central-1.wasabisys.com/mashvisor-cdn/task-fe-listings.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let list = [...properties];

    if (search) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (minBeds > 0) {
      list = list.filter((p) => p.bedrooms >= minBeds);
    }

    if (sort === "asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      list.sort((a, b) => b.price - a.price);
    }

    setFiltered(list);
  }, [search, minBeds, sort, properties]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Real Estate Listings
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} />
        <FilterSort setMinBeds={setMinBeds} setSort={setSort} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">
          No properties found. Try adjusting your filters.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  );
}
