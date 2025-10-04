"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type TSearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: TSearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex gap-2 w-full max-w-lg mx-auto mb-6">
      <Input
        type="text"
        placeholder="Search by unit name, number, or project..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        onClick={handleSearch}
        className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-full"
      >
        Search
      </Button>
    </div>
  );
}
