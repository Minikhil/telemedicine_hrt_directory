import { Clinic } from '../types/Clinic';

export async function getClinics(): Promise<Clinic[]> {
  console.log('getClinics: Starting fetch');
  try {
    console.log('getClinics: Making API request');
    const response = await fetch('/api/clinics');
    console.log('getClinics: API response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('getClinics: API Error:', {
        status: response.status,
        statusText: response.statusText,
        errorData
      });
      throw new Error(`Failed to fetch clinics: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('getClinics: Received data:', data);
    return data;
  } catch (error) {
    console.error('getClinics: Error fetching clinics:', error);
    throw error;
  }
}

// export const clinics: Clinic[] = [
//   {
//     id: 'plume',
//     name: 'Plume',
//     description: 'Plume provides gender-affirming hormone therapy through virtual visits with licensed medical providers.',
//     website: 'https://getplume.co',
//     startingPrice: '$99/month',
//     availableStates: [
//       'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
//       'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Idaho', 'Illinois', 
//       'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
//       'Massachusetts', 'Michigan', 'Minnesota', 'Missouri', 'Montana', 'Nebraska', 
//       'Nevada', 'New Jersey', 'New Hampshire', 'New Mexico', 'New York', 
//       'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
//       'Pennsylvania', 'Rhode Island', 'South Dakota', 'Texas', 'Tennessee', 
//       'Vermont', 'Virginia', 'Utah', 'Washington', 'Washington D.C.', 
//       'West Virginia', 'Wisconsin', 'Wyoming'
//     ],
//     services: ['HRT Consultations', 'Ongoing Care', 'Lab Work', 'Letter Writing'],
//     insuranceAccepted: true,
//     prescriptionOffered: true,
//     labWorkIncluded: true,
//     consultationFee: 'Included in membership',
//     averageWaitTime: '1-2 weeks',
//     rating: 4.8,
//     reviewCount: 1250,
//     imageUrl: '/providers/plume.png',
//     trustpilotUrl: 'https://www.trustpilot.com/review/getplume.co'
//   },
//   {
//     id: 'folx',
//     name: 'FOLX Health',
//     description: 'FOLX Health provides comprehensive virtual healthcare services including HRT, with a focus on the LGBTQ+ community.',
//     website: 'https://www.folxhealth.com',
//     startingPrice: '$85/month',
//     availableStates: ['California', 'New York', 'Massachusetts', 'Washington', 'Oregon', /* Add more states */],
//     services: ['HRT', 'PrEP', 'Sexual Health', 'Primary Care'],
//     insuranceAccepted: false,
//     prescriptionOffered: true,
//     labWorkIncluded: true,
//     consultationFee: '$89',
//     averageWaitTime: '3-5 days',
//     rating: 4.7,
//     reviewCount: 890,
//     imageUrl: '/providers/folx.png',
//     trustpilotUrl: 'https://www.trustpilot.com/review/folxhealth.com'
//   },
//   {
//     id: 'hormonemd',
//     name: 'HormoneMD',
//     description: 'HormoneMD is a digital health platform offering comprehensive hormone therapy services including TRT, BHRT, and other hormone optimization treatments.',
//     website: 'https://www.hormonemd.com',
//     startingPrice: '$99/month',
//     availableStates: [
//       'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
//       'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Idaho', 'Illinois', 
//       'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
//       'Massachusetts', 'Michigan', 'Minnesota', 'Missouri', 'Montana', 'Nebraska', 
//       'Nevada', 'New Jersey', 'New Hampshire', 'New Mexico', 'New York', 
//       'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
//       'Pennsylvania', 'Rhode Island', 'South Dakota', 'Texas', 'Tennessee', 
//       'Vermont', 'Virginia', 'Utah', 'Washington', 'Washington D.C.', 
//       'West Virginia', 'Wisconsin', 'Wyoming'
//     ],
//     services: [
//       'TRT for Men',
//       'BHRT for Women',
//       'Semaglutide',
//       'Sermorelin',
//       'Metformin',
//       'Rapamycin',
//       'DHEA',
//       'Lab Work',
//       'Unlimited Consultations'
//     ],
//     insuranceAccepted: false,
//     prescriptionOffered: true,
//     labWorkIncluded: true,
//     consultationFee: 'Included in subscription',
//     averageWaitTime: '1-2 days',
//     rating: 4.9,
//     reviewCount: 2100,
//     imageUrl: '/providers/hormonemd.png',
//     trustpilotUrl: 'https://www.trustpilot.com/review/hormonemd.com'
//   }
// ]; 