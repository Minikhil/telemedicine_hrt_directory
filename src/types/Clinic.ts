export interface Clinic {
  id: number;
  name: string;
  description: string;
  website: string;
  starting_price: string;
  available_states: string[];
  services: string[];
  insurance_accepted: boolean;
  prescription_offered: boolean;
  lab_work_included: boolean;
  consultation_fee: string;
  average_wait_time: string;
  rating: number;
  review_count: number;
  image_url: string | null;
  trustpilot_url: string | null;
  created_at: string;
  updated_at: string;
} 