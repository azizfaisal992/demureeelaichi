import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Search, X } from 'lucide-react';

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  return (
    <div className="relative">
      {/* The actual search bar */}
      <div
        className={`absolute bottom-0 right-10 z-50  transition-all duration-300 ease-in-out
        ${showSearch ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
      >
        <div className="bg-white shadow-md border border-gray-300 rounded-full px-4 py-2 flex items-center w-64">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
            type="text"
            placeholder="Search..."
          />
          <X
            onClick={() => setShowSearch(false)}
            className="w-5 h-5 text-gray-500 ml-3 cursor-pointer hover:text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
