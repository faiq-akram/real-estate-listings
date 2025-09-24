export default function FilterSort({
  setMinBeds,
  setSort,
}: {
  setMinBeds: (n: number) => void;
  setSort: (s: string) => void;
}) {
  return (
    <div className="flex gap-4">
      <select
        onChange={(e) => setMinBeds(Number(e.target.value))}
        className="border rounded-lg px-3 py-2"
      >
        <option value={0}>All Bedrooms</option>
        <option value={1}>1+ Bedrooms</option>
        <option value={2}>2+ Bedrooms</option>
        <option value={3}>3+ Bedrooms</option>
      </select>

      <select
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">Sort By</option>
        <option value="asc">Price Low → High</option>
        <option value="desc">Price High → Low</option>
      </select>
    </div>
  );
}
