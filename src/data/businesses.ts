export type Business = {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  location: string;
  isOpen: boolean;
  hours: string;
  image: string;
  tags: string[];
};

// Mock data — replace with an API call later (see src/data/README of future services layer).
export const businesses: Business[] = [
  {
    id: "sharma-electronics",
    name: "Sharma Electronics Hub",
    category: "Electronics Store",
    rating: 4.4,
    reviews: 7586,
    description:
      "Multi-brand electronics showroom with televisions, laptops, appliances and on-site service support.",
    location: "Connaught Place, New Delhi",
    isOpen: true,
    hours: "Closes 9:30 PM",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=70",
    tags: ["Electronics", "Appliances"],
  },
  {
    id: "spice-route",
    name: "The Spice Route Kitchen",
    category: "North Indian Restaurant",
    rating: 4.7,
    reviews: 3421,
    description:
      "Family dining spot known for slow-cooked curries, tandoori platters and weekend thali specials.",
    location: "Sector 29, Gurugram",
    isOpen: true,
    hours: "Closes 11:00 PM",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=70",
    tags: ["Dining", "Family"],
  },
  {
    id: "urban-thread",
    name: "Urban Thread Studio",
    category: "Clothing Boutique",
    rating: 4.5,
    reviews: 1284,
    description:
      "Contemporary ethnic and casual wear with in-house tailoring and seasonal designer collections.",
    location: "Bandra West, Mumbai",
    isOpen: false,
    hours: "Opens 10:00 AM",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=70",
    tags: ["Fashion", "Tailoring"],
  },
  {
    id: "greenleaf-clinic",
    name: "GreenLeaf Family Clinic",
    category: "Healthcare Clinic",
    rating: 4.8,
    reviews: 962,
    description:
      "General physicians, diagnostics and pharmacy under one roof with same-day appointment slots.",
    location: "Koramangala, Bengaluru",
    isOpen: true,
    hours: "Closes 8:00 PM",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=70",
    tags: ["Clinic", "Pharmacy"],
  },
  {
    id: "motorworks",
    name: "MotorWorks Auto Care",
    category: "Car Service Centre",
    rating: 4.3,
    reviews: 2140,
    description:
      "Periodic servicing, denting-painting and roadside assistance for all major car brands.",
    location: "Kothrud, Pune",
    isOpen: true,
    hours: "Closes 7:30 PM",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=70",
    tags: ["Automotive", "Repairs"],
  },
  {
    id: "glow-lounge",
    name: "Glow Beauty Lounge",
    category: "Salon & Spa",
    rating: 4.6,
    reviews: 1875,
    description:
      "Unisex salon offering hair studio services, skin treatments and relaxing spa therapies.",
    location: "Salt Lake, Kolkata",
    isOpen: false,
    hours: "Opens 9:30 AM",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=70",
    tags: ["Beauty", "Spa"],
  },
];
