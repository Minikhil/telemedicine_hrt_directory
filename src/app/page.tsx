'use client';

import { useState, useEffect } from 'react';
import ClinicCard from '../components/ProviderCard';
import ProviderFilters from '../components/ProviderFilters';
import { getClinics } from '../data/providers';
import { Clinic } from '../types/Clinic';

export default function Home() {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [filteredClinics, setFilteredClinics] = useState<Clinic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Page: Starting data fetch');
    const fetchClinics = async () => {
      try {
        console.log('Page: Calling getClinics');
        const data = await getClinics();
        console.log('Page: Received clinics data:', data);
        
        // Ensure data is an array before updating state
        const clinicsArray = Array.isArray(data) ? data : [];
        console.log('Page: Processed clinics array:', clinicsArray);

        setClinics(clinicsArray);
        setFilteredClinics(clinicsArray);
        console.log('Page: Updated state with clinics:', clinicsArray.length);
      } catch (err) {
        console.error('Page: Error in fetchClinics:', err);
        setError('Failed to load clinics. Please try again later.');
        setClinics([]);
        setFilteredClinics([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClinics();
  }, []);

  const handleSearch = (query: string) => {
    if (!clinics?.length) return;
    const searchTerm = query.toLowerCase();
    const filtered = clinics.filter(clinic => 
      clinic.name.toLowerCase().includes(searchTerm) ||
      clinic.description.toLowerCase().includes(searchTerm)
    );
    setFilteredClinics(filtered);
  };

  const handleStateFilter = (state: string) => {
    if (!clinics?.length) return;
    if (!state) {
      setFilteredClinics(clinics);
      return;
    }
    const filtered = clinics.filter(clinic =>
      clinic.available_states.includes(state)
    );
    setFilteredClinics(filtered);
  };

  const handlePriceFilter = (priceRange: string) => {
    if (!clinics?.length) return;
    if (!priceRange) {
      setFilteredClinics(clinics);
      return;
    }

    const filtered = clinics.filter(clinic => {
      const price = parseInt(clinic.starting_price.replace(/[^0-9]/g, ''));
      switch (priceRange) {
        case 'Under $50/month':
          return price < 50;
        case '$50-$100/month':
          return price >= 50 && price <= 100;
        case '$100-$150/month':
          return price > 100 && price <= 150;
        case 'Over $150/month':
          return price > 150;
        default:
          return true;
      }
    });
    setFilteredClinics(filtered);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading clinics...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            HRT Telemedicine Directory
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find trusted hormone replacement therapy clinics offering virtual care. Compare services, costs, and coverage to find the right clinic for you.
          </p>
        </section>

        {/* Filters Section */}
        <ProviderFilters
          onSearch={handleSearch}
          onStateFilter={handleStateFilter}
          onPriceFilter={handlePriceFilter}
        />

        {/* Clinics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClinics && filteredClinics.length > 0 ? (
            filteredClinics.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600 dark:text-gray-300">No clinics found matching your criteria.</p>
            </div>
          )}
        </section>

        {/* Info Section */}
        <section className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">About HRT Telemedicine</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Telemedicine HRT clinics offer virtual consultations, prescriptions, and ongoing care for hormone replacement therapy. Each clinic has different coverage areas, costs, and services. We recommend researching multiple clinics and consulting with healthcare professionals to find the best fit for your needs.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Why Choose Telemedicine?</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Convenient access from home</li>
                <li>Often more affordable than in-person care</li>
                <li>Reduced wait times</li>
                <li>Access to specialized providers</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What to Consider</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>State availability</li>
                <li>Insurance coverage</li>
                <li>Prescription policies</li>
                <li>Lab work requirements</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Getting Started</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Compare clinic services</li>
                <li>Check state eligibility</li>
                <li>Review costs and insurance</li>
                <li>Schedule a consultation</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
