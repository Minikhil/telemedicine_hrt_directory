import { SearchIcon, MapPin, DollarSign, Star } from 'lucide-react';
import { useState } from 'react';

interface ProviderFiltersProps {
  onSearch: (query: string) => void;
  onStateFilter: (state: string) => void;
  onPriceFilter: (price: string) => void;
  onRatingFilter: (rating: string) => void;
}

export default function ProviderFilters({ onSearch, onStateFilter, onPriceFilter, onRatingFilter }: ProviderFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const states = [
    'All States',
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Idaho', 'Illinois', 
    'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
    'Massachusetts', 'Michigan', 'Minnesota', 'Missouri', 'Montana', 'Nebraska', 
    'Nevada', 'New Jersey', 'New Hampshire', 'New Mexico', 'New York', 
    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
    'Pennsylvania', 'Rhode Island', 'South Dakota', 'Texas', 'Tennessee', 
    'Vermont', 'Virginia', 'Utah', 'Washington', 'Washington D.C.', 
    'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const priceRanges = [
    'All Prices',
    'Under $50/month',
    '$50-$100/month',
    '$100-$150/month',
    'Over $150/month'
  ];

  const ratingOptions = [
    'All Ratings',
    '4.5 & Up',
    '4.0 & Up',
    '3.5 & Up',
    '3.0 & Up'
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value;
    setSelectedState(state);
    onStateFilter(state === 'All States' ? '' : state);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const price = e.target.value;
    setSelectedPrice(price);
    onPriceFilter(price === 'All Prices' ? '' : price);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rating = e.target.value;
    setSelectedRating(rating);
    onRatingFilter(rating === 'All Ratings' ? '' : rating);
  };

  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search providers..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
        />
        <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* State Filter */}
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gray-400" />
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          >
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-gray-400" />
          <select
            value={selectedPrice}
            onChange={handlePriceChange}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          >
            {priceRanges.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-gray-400" />
          <select
            value={selectedRating}
            onChange={handleRatingChange}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          >
            {ratingOptions.map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 