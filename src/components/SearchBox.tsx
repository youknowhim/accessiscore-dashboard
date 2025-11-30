import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  totalProperties: number;
  filteredCount: number;
}

const SearchBox = ({ value, onChange, totalProperties, filteredCount }: SearchBoxProps) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search properties (Property 1-10)..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 h-12 text-base"
        />
      </div>
      {value && filteredCount === 0 && (
        <p className="mt-2 text-sm text-destructive">
          No properties found. Please select from Property 1 to Property {totalProperties}.
        </p>
      )}
      {value && filteredCount > 0 && (
        <p className="mt-2 text-sm text-muted-foreground">
          Showing {filteredCount} of {totalProperties} properties
        </p>
      )}
    </div>
  );
};

export default SearchBox;
