# ALX Listing App

A simple Airbnb clone listing page built with Next.js, TypeScript, and Tailwind CSS.
The goal of this project is to practice building modern, responsive UIs while exploring how to structure a Next.js project for scalability.

## Project Structure

```
alx-listing-app/
├── components/   # Reusable React components (e.g., Navbar, ListingCard, Footer)
├── interfaces/   # TypeScript interfaces and type definitions
├── constants/    # Reusable constants (e.g., dummy data, configs)
├── public/
│   └── assets/   # Images, icons, and other static files
├── pages/        # Next.js pages (routes are based on filenames)
├── styles/       # Global CSS
└── ...
```

- components/ → Encapsulates UI elements for reusability and cleaner code.
- interfaces/ → Centralizes TypeScript types for consistency across the project.
- constants/ → Holds static data and configuration used throughout the app.
- public/assets/ → Stores images and other static files accessible at /assets/...

## Getting Started

To run the project locally:

1. Clone the repository:

```
git clone https://github.com/nasrelasri/alx-listing-app.git
cd alx-listing-app
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open http://localhost:3000 in your browser.

### Built With
- [Next.js](https://nextjs.org "Go to Next.js site") – React framework for production apps
- [TypeScript](https://www.typescriptlang.org/ "Go to TypeScript site") – Strongly typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/ "Go to Tailwind CSS site") – Utility-first CSS framework

### Learn More
For more about Next.js itself, see:
- [Next.js Documentation](https://nextjs.org/docs "Go to Next.js docs")
- [Learn Next.js](https://nextjs.org/learn "Go to Next.js learning page")