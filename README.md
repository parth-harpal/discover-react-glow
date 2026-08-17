# DSupply Discover

DSupply — Convert WordPress Homepage to React

I want to rebuild the existing DSupply website (https://dsupply.in/) from WordPress into a modern React-based frontend.

For now, DO NOT build the complete website or backend. I only want the main homepage/front page UI.

Main Goal

Recreate the DSupply homepage in React while preserving the core purpose, content hierarchy, branding, and user experience of the existing website.

The website is a business discovery/directory platform, where users can discover businesses, stores, services, and other places.

The current website contains business information such as:

Business name

Category

Ratings and reviews

Address

Phone number

Photos

Opening hours

Location/map information

Business descriptions

Tags/categories

Use the existing website as the primary visual/content reference:
https://dsupply.in/

Do not simply make a generic business directory. The homepage should feel like a modern React version of DSupply.

Technology

Build the frontend using:

React

Vite

TypeScript

Tailwind CSS

Lucide React icons

Use reusable React components.

Do NOT use WordPress, PHP, Elementor, or WordPress-specific code.

For now, this is frontend UI only.

Use mock/static data where necessary.

Homepage Structure

Create a complete responsive homepage with the following sections.

1. Header / Navbar

Create a clean modern navigation bar.

Include:

DSupply logo/name

Home

Explore / Businesses

Categories

About

Contact

Search icon

Login / Sign Up buttons if appropriate

A prominent CTA such as "Add Your Business"

The navbar should be:

Clean

Responsive

Sticky on scroll

Mobile friendly

On mobile, convert the navigation into a hamburger menu.

2. Hero Section

Create a large, visually attractive hero section.

Main heading should communicate the purpose of DSupply, for example:

"Discover the Best Businesses Near You"

Supporting text:

"Find trusted local businesses, stores, services and more — all in one place."

Add a large search interface.

The search area should contain:

Search input

Placeholder:

"Search businesses, services or places..."

Location input

Placeholder:

"Enter location"

Search button

Use a search icon.

The search bar should be visually prominent and easy to use.

Add subtle background imagery/illustration related to local businesses and discovery.

Do not make the hero overly complicated.

3. Popular Categories

Create a category section immediately below the hero.

Title:

"Explore Popular Categories"

Create attractive category cards/icons.

Example categories:

Restaurants

Shopping

Electronics

Clothing

Home & Furniture

Beauty & Wellness

Automotive

Healthcare

Education

Services

Each category should have:

Icon

Category name

Number of businesses

Example:

Restaurants
1,250+ Businesses

Use Lucide icons or simple professional icons.

Cards should have hover animations.

4. Featured / Popular Businesses

Create a section:

"Popular Businesses"

Display business cards in a responsive grid.

Each business card should contain:

Business image

Business name

Category

Star rating

Number of reviews

Short description

Location

Open/Closed status

"View Details" button

Use realistic mock business data inspired by the type of businesses currently present on DSupply.

Example:

Croma
Electronics Store

★★★★★ 4.4
7,586 reviews

Connaught Place, New Delhi

Open • Closes 9:30 PM

View Details


Do not copy private information or unnecessarily duplicate exact third-party business data from the existing website. Use representative/mock data for the React prototype.

5. Discover Businesses Near You

Create a section focused on location-based discovery.

Heading:

"Find Businesses Near You"

Include:

Location illustration/map placeholder

Search location input

"Explore Nearby" button

The section should communicate that users can discover businesses based on their location.

For now, the map can be a polished placeholder/mock UI.

Do not implement Google Maps or another map API yet.

6. Why DSupply?

Create a clean feature section.

Heading:

"Why Choose DSupply?"

Use 3–4 feature cards.

Examples:

Discover Easily

Find businesses and services quickly.

Verified Information

Access useful business information in one place.

Explore Nearby

Discover businesses around your location.

Easy Business Discovery

Search by category, location and business name.

Use simple icons and subtle animations.

7. Call To Action

Create a strong CTA section.

Example:

"Have a Business?"

"Get discovered by thousands of customers looking for businesses like yours."

Button:

"Add Your Business"

Secondary button:

"Learn More"

Use a visually distinct section.

8. Footer

Create a professional footer.

Include:

DSupply

Short description about the platform.

Quick Links

Home

Explore

Categories

About

Contact

Business

Add Your Business

Claim Your Business

Business Login

Support

Help Center

Privacy Policy

Terms & Conditions

Contact Us

Social Media

Add social media icons.

Add copyright:

© 2026 DSupply. All rights reserved.

Design Requirements

The design should look like a modern production-level SaaS/local-business discovery platform, not a basic template.

Use:

Clean typography

Rounded cards

Modern spacing

Subtle shadows

Professional icons

Smooth hover effects

Smooth scrolling

Micro animations

Proper visual hierarchy

High-quality responsive layout

Do not overuse gradients.

Keep the interface professional and trustworthy.

Responsive Design

The homepage MUST work properly on:

Desktop

Laptop

Tablet

Mobile

Desktop should use a wide container.

Tablet should reduce grid columns appropriately.

Mobile should:

Stack sections vertically

Make the search interface responsive

Convert navbar to hamburger menu

Use single-column business cards

Keep buttons touch-friendly

Avoid horizontal scrolling

Component Architecture

Create reusable React components such as:

src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SearchBar.tsx
│   ├── CategoryCard.tsx
│   ├── CategorySection.tsx
│   ├── BusinessCard.tsx
│   ├── FeaturedBusinesses.tsx
│   ├── NearbyBusinesses.tsx
│   ├── WhyDSupply.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
│
├── pages/
│   └── Home.tsx
│
├── data/
│   ├── categories.ts
│   └── businesses.ts
│
├── App.tsx
└── main.tsx


Keep components modular and easy to extend later.

Important

This is Phase 1 only.

Do NOT implement:

Backend

Database

Authentication

WordPress API

Admin panel

Business registration

Business dashboard

Real map API

Real search API

Payment system

Reviews backend

Only create the homepage frontend UI with mock data.

However, structure the React application so that APIs can easily be connected later.

Future Architecture

Keep the code ready for future pages such as:

/
 /businesses
 /business/:id
 /categories
 /category/:slug
 /search
 /add-business
 /login
 /register
 /dashboard
 /about
 /contact


But do not build these pages now.

Only the / homepage should be implemented.

Quality Requirements

Before finishing:

Make sure there are no TypeScript errors.

Make sure there are no console errors.

Make sure all components are responsive.

Make sure buttons and navigation elements have proper hover states.

Use semantic HTML.

Maintain good accessibility.

Optimize images.

Avoid unnecessary dependencies.

Keep the code clean and reusable.

Make the homepage visually polished and production-ready.

Most importantly, use the existing DSupply website as the reference for its identity and information architecture, but modernize the UI rather than blindly copying the WordPress implementation.

Start by building only the DSupply homepage.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cb78e8d5-3fc4-4c1c-8f8d-849a47261f3f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
