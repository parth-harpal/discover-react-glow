import type { LucideIcon } from "lucide-react";
import {
  UtensilsCrossed,
  ShoppingBag,
  Smartphone,
  Shirt,
  Sofa,
  Sparkles,
  Car,
  Stethoscope,
  GraduationCap,
  Wrench,
} from "lucide-react";

export type Category = {
  slug: string;
  name: string;
  count: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  { slug: "restaurants", name: "Restaurants", count: "1,250+", icon: UtensilsCrossed },
  { slug: "shopping", name: "Shopping", count: "980+", icon: ShoppingBag },
  { slug: "electronics", name: "Electronics", count: "740+", icon: Smartphone },
  { slug: "clothing", name: "Clothing", count: "1,120+", icon: Shirt },
  { slug: "home-furniture", name: "Home & Furniture", count: "610+", icon: Sofa },
  { slug: "beauty-wellness", name: "Beauty & Wellness", count: "830+", icon: Sparkles },
  { slug: "automotive", name: "Automotive", count: "455+", icon: Car },
  { slug: "healthcare", name: "Healthcare", count: "690+", icon: Stethoscope },
  { slug: "education", name: "Education", count: "520+", icon: GraduationCap },
  { slug: "services", name: "Services", count: "1,400+", icon: Wrench },
];
