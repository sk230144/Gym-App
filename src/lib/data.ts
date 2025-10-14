import { PlaceHolderImages } from "./placeholder-images";

export type Trainer = {
  name: string;
  specialization: string;
  bio: string;
  imageUrl: string;
  imageHint: string;
};

export const trainers: Trainer[] = [
  {
    name: "Alex Johnson",
    specialization: "Strength & Conditioning",
    bio: "With over 10 years of experience, Alex focuses on building functional strength and helping clients surpass their physical goals.",
    imageUrl: PlaceHolderImages.find(img => img.id === 'trainer-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'trainer-1')?.imageHint || ''
  },
  {
    name: "Maria Garcia",
    specialization: "Yoga & Flexibility",
    bio: "Maria is a certified yoga instructor who believes in the power of mind-body connection for a holistic approach to fitness.",
    imageUrl: PlaceHolderImages.find(img => img.id === 'trainer-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'trainer-2')?.imageHint || ''
  },
  {
    name: "Sam Chen",
    specialization: "HIIT & Cardio",
    bio: "Sam's high-energy classes are designed to push your limits, burn calories, and improve your cardiovascular health in a fun way.",
    imageUrl: PlaceHolderImages.find(img => img.id === 'trainer-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(img => img.id === 'trainer-3')?.imageHint || ''
  },
];

export type Member = {
  id: string;
  name: string;
  joinDate: string;
  paymentStatus: "Paid" | "Unpaid";
  monthsPaid: number;
};

export const initialMembers: Member[] = [
  { id: 'usr001', name: 'John Doe', joinDate: '2023-01-15', paymentStatus: 'Paid', monthsPaid: 12 },
  { id: 'usr002', name: 'Jane Smith', joinDate: '2023-03-22', paymentStatus: 'Paid', monthsPaid: 6 },
  { id: 'usr003', name: 'Mike Brown', joinDate: '2023-05-10', paymentStatus: 'Unpaid', monthsPaid: 1 },
  { id: 'usr004', name: 'Emily White', joinDate: '2023-06-01', paymentStatus: 'Paid', monthsPaid: 3 },
  { id: 'usr005', name: 'Chris Green', joinDate: '2023-08-19', paymentStatus: 'Unpaid', monthsPaid: 0 },
  { id: 'usr006', name: 'Patricia Black', joinDate: '2023-09-30', paymentStatus: 'Paid', monthsPaid: 1 },
  { id: 'usr007', name: 'Daniel Blue', joinDate: '2023-10-05', paymentStatus: 'Paid', monthsPaid: 2 },
  { id: 'usr008', name: 'Jessica Grey', joinDate: '2024-01-12', paymentStatus: 'Unpaid', monthsPaid: 1 },
  { id: 'usr009', name: 'David Gold', joinDate: '2024-02-20', paymentStatus: 'Paid', monthsPaid: 1 },
  { id: 'usr010', name: 'Sarah Silver', joinDate: '2024-03-14', paymentStatus: 'Unpaid', monthsPaid: 0 },
];
