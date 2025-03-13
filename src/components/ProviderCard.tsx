import { Star, MapPin, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { Clinic } from '../types/Clinic';

interface ClinicCardProps {
  clinic: Clinic;
}

export default function ClinicCard({ clinic }: ClinicCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold">{clinic.name}</h3>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
            {clinic.rating} ({clinic.review_count})
          </span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {clinic.description}
      </p>

      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>Starting from {clinic.starting_price}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <span>Available in {clinic.available_states.length} states</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          <span>Average wait: {clinic.average_wait_time}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {clinic.services.map((service, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
          >
            {service}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={clinic.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
        >
          Visit Website
        </a>
        <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
          Learn More
        </button>
      </div>

      {clinic.trustpilot_url && (
        <a
          href={clinic.trustpilot_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Read reviews on Trustpilot
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      )}
    </div>
  );
} 