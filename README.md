# Zeynora Coming Soon

Premium "Coming Soon" landing page for Zeynora - a fashion-only brand.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Supabase:**
   - Create a new Supabase project (or use existing)
   - Run the SQL from `supabase-setup.sql` in the Supabase SQL Editor
   - Hero images are already configured and hosted on Supabase Storage

3. **Configure environment variables:**
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase URL and anon key:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. **Run the development server (with Turbo Pack):**
   ```bash
   npm run dev
   ```
   
   The dev server uses Turbo Pack for faster builds and hot reloading.

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Database Setup

Run the SQL commands from `supabase-setup.sql` in your Supabase SQL Editor. This will:
- Create the `prelaunch_leads` table
- Enable Row Level Security
- Create a public insert policy for anonymous users

## Project Structure

- `app/page.tsx` - Main landing page
- `app/layout.tsx` - Root layout with fonts
- `components/EarlyAccessModal.tsx` - 2-step form modal
- `lib/supabase.ts` - Supabase client configuration
- `supabase-setup.sql` - Database setup SQL

## Features

- Fully responsive design (desktop + mobile)
- Hero images from Supabase Storage (already configured)
- 2-step early access form (Email → WhatsApp)
- Supabase integration for lead collection
- Premium, luxury design aesthetic
- Turbo Pack enabled for faster development

## Vercel Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

Vercel will automatically detect Next.js and use the correct build settings.

