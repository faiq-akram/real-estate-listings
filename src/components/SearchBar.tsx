export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search properties..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
