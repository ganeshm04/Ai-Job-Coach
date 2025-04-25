# AI Job Coach

AI Job Coach is a Next.js-based web application designed to help users accelerate their career growth with AI-powered tools. It provides features like resume building, cover letter generation, interview preparation, and industry insights to help users achieve their professional goals.

## Features

### 1. **AI-Powered Career Guidance**
- Get personalized career advice and insights powered by advanced AI technology.

### 2. **Smart Resume Creation**
- Generate ATS-optimized resumes with AI assistance.
- Edit and preview resumes in real-time.
- Save and download resumes as PDFs.

### 3. **Cover Letter Generation**
- Create tailored cover letters for specific job applications.
- Use AI to generate compelling and professional content.

### 4. **Interview Preparation**
- Practice with role-specific mock interview questions.
- Get instant feedback and improvement tips.
- Track your performance over time with detailed analytics.

### 5. **Industry Insights**
- Stay updated with real-time industry trends, salary data, and market analysis.
- Get insights into growth rates, demand levels, and top skills for your industry.

### 6. **Progress Tracking**
- Monitor your improvements with detailed performance analytics.
- View quiz scores, improvement tips, and trends over time.

## Project Structure

The project is organized into the following main directories:

### **`actions/`**
Contains server-side logic for handling various features:
- `cover-letter.js`: Handles cover letter generation and management.
- `dashboard.js`: Provides industry insights and analytics.
- `interview.js`: Manages interview preparation features.
- `resume.js`: Handles resume creation and saving.
- `user.js`: Manages user-related actions like onboarding.

### **`app/`**
Contains the main application pages and components:
- `layout.js`: Defines the root layout of the application.
- `globals.css`: Global styles for the application.
- **`(auth)/`**: Handles authentication-related pages like sign-in and sign-up.
- **`(main)/`**: Contains the main features of the application:
  - `ai-cover-letter/`: Pages and components for cover letter generation.
  - `dashboard/`: Pages and components for industry insights.
  - `interview/`: Pages and components for interview preparation.
  - `onboarding/`: Pages and components for user onboarding.
  - `resume/`: Pages and components for resume building.

### **`components/`**
Reusable UI components used across the application:
- `ui/`: Contains UI elements like buttons, cards, inputs, and more.
- `header.jsx`: The header component for navigation.
- `hero.jsx`: The hero section for the homepage.

### **`data/`**
Static data used in the application:
- `faqs.js`: Frequently asked questions.
- `features.js`: Features of the application.
- `howItWorks.js`: Steps explaining how the application works.
- `industries.js`: Industry data for onboarding and insights.
- `testimonial.js`: User testimonials.

### **`hooks/`**
Custom React hooks for managing state and fetching data:
- `use-fetch.js`: A hook for handling API calls and managing loading/error states.

### **`lib/`**
Helper functions and utilities:
- `helper.js`: Utility functions for formatting data.
- `schema.js`: Zod schemas for form validation.
- `prisma.js`: Prisma client for database interactions.
- `utils.js`: Utility functions for class name merging.

### **`prisma/`**
Database schema and migrations:
- `schema.prisma`: Defines the database schema.
- `migrations/`: Contains migration files for database changes.

### **`public/`**
Static assets like images and icons used in the application.

### **`next.config.mjs`**
Configuration file for the Next.js application.

### **`tailwind.config.mjs`**
Configuration file for Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- A PostgreSQL database for storing user data.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Ai_Job_Coach
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the required variables (e.g., `DATABASE_URL`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, etc.).

4. Run database migrations:
   ```bash
   npx prisma migrate deploy
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application can be deployed on [Vercel](https://vercel.com/):
1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Set up environment variables in the Vercel dashboard.
4. Deploy the application.

## Learn More

To learn more about the technologies used in this project, check out the following resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Clerk Documentation](https://clerk.dev/docs)


