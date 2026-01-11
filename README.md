## Infigon – Product Listing App

A modern product listing application built with Next.js (App Router), TypeScript, and Tailwind CSS, featuring filtering, favorites, and dark mode.

## Setup Instructions

1️⃣ Clone the repository
git clone <your-repo-url>
cd infigon

## Install dependencies

npm install

## Run the development server

npm run dev

Open your browser and navigate to:

http://localhost:3000

## 🧩 Tech Stack

Next.js 13+ (App Router)

TypeScript

Tailwind CSS

FakeStore API

Session Storage

## Features Implemented

# Product Listing

Fetches products from FakeStore API

Responsive grid layout

Product detail page with dynamic routing

# Search & Filters

Search products by title

Filter by category using buttons

Combined filtering (search + category)

# Favorites (Session-based)

Mark/unmark products as favorites

Favorites stored in sessionStorage

Favorites filter to view only saved products

Favorites are tab-specific (no cross-tab sync)

# Loading & Empty States

Skeleton loaders while fetching data

“No products found” empty state for filtered results

# Responsive UI

Fully responsive across mobile, tablet, and desktop

Clean and accessible UI using Tailwind CSS

# Project Structure (Simplified)
app/
├─ page.tsx
├─ products/
| |\_page.tsx
│ └─ [id]/page.tsx
components/
├─ Card.tsx
├─ FilterComponent.tsx
├─ Skeleton.tsx
Services/
└─ products.ts
types/
└─ Products.ts
utils/
└─ favorites.ts
