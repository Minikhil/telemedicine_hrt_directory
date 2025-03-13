# HRT Telemedicine Directory

A modern web application built with Next.js that helps users find and compare HRT (Hormone Replacement Therapy) telemedicine providers. The directory provides detailed information about various clinics, their services, pricing, and availability across different states.

## Features

- 🔍 **Advanced Search & Filtering**
  - Search clinics by name and description
  - Filter by state availability
  - Filter by price range
  - Real-time results updating

- 💊 **Comprehensive Clinic Information**
  - Detailed provider profiles
  - Starting prices and consultation fees
  - Available states coverage
  - Services offered
  - Insurance acceptance status
  - Prescription and lab work details
  - Average wait times
  - Ratings and reviews
  - Direct links to provider websites and Trustpilot reviews

- 🎨 **Modern UI/UX**
  - Responsive grid layout
  - Loading states
  - Error handling
  - Dark mode support
  - Beautiful gradients and animations
  - Accessible design

## Tech Stack

- **Frontend Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **State Management**: React useState/useEffect
- **Icons**: Lucide Icons
- **TypeScript** for type safety

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Supabase account (for database)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd telemedicine_hrt_directory
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/         # React components
│   ├── ProviderCard.tsx
│   └── ProviderFilters.tsx
├── data/              # Data fetching and API functions
│   └── providers.ts
└── types/             # TypeScript interfaces
    └── Clinic.ts
```

## Database Schema

The `Clinic` interface includes the following fields:
- `id`: Unique identifier
- `name`: Clinic name
- `description`: Detailed description
- `website`: Official website URL
- `starting_price`: Monthly subscription cost
- `available_states`: Array of states where service is available
- `services`: Array of offered services
- `insurance_accepted`: Boolean indicating insurance acceptance
- `prescription_offered`: Boolean indicating prescription services
- `lab_work_included`: Boolean indicating included lab work
- `consultation_fee`: Consultation cost information
- `average_wait_time`: Typical waiting period
- `rating`: Numerical rating
- `review_count`: Number of reviews
- `image_url`: Clinic logo/image URL
- `trustpilot_url`: Link to Trustpilot reviews
- `created_at`: Record creation timestamp
- `updated_at`: Record update timestamp

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
