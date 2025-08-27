# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `pnpm dev`
- **Build for production**: `pnpm build`
- **Start production server**: `pnpm start`
- **Lint code**: `pnpm lint`
- **Install dependencies**: `pnpm install`

## Project Architecture

This is a **Korean landing page for Growink**, a digital services company offering web development, short-form video production, branding, and marketing services. The project is built with:

### Core Technologies
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with shadcn/ui components
- **Typography**: Noto Sans KR (Korean font)
- **Backend**: Firebase (auth, firestore, storage)
- **Package Manager**: pnpm (required)
- **Language**: Korean primary, TypeScript for code

### Project Structure
- **`/app`**: Next.js 15 App Router - pages and routing with Korean content
- **`/components`**: Reusable UI components including shadcn/ui components in `/ui` subdirectory
- **`/components/admin`**: Admin dashboard components for inquiries and user management
- **`/lib`**: Utilities including Firebase configuration and cn() helper
- **`/hooks`**: Custom React hooks (use-mobile, use-toast)
- **`/public/images`**: Static assets including team photos (김경빈.jpg, 송수오.jpg)
- **`/styles`**: Global CSS styles

### Key Components Architecture
- **Layout System**: Root layout with Korean metadata, Noto Sans KR font, and SEO optimization
- **UI Components**: shadcn/ui design system with custom theming (deep navy primary, gold accent)
- **Interactive Elements**: Framer Motion animations, tech backgrounds, data visualizations
- **Admin System**: Dashboard with Firebase integration for inquiry management

### Firebase Integration
Firebase is configured in `/lib/firebase.ts` with environment variables:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

### Theming and Design
- **Color Scheme**: Dark theme with deep navy (#1E3A8A) primary and gold (#D4AF37) accent
- **CSS Variables**: Uses HSL color system with CSS custom properties
- **Korean Typography**: Noto Sans KR font optimization
- **Responsive**: Mobile-first design with Tailwind breakpoints

### SEO and Analytics
- **Structured Data**: JSON-LD for LocalBusiness and Service schemas
- **Naver Integration**: Site verification, analytics, and search optimization
- **Meta Tags**: Comprehensive Korean SEO with Open Graph and Twitter cards
- **Sitemap**: Static sitemap generation for Korean pages

## Development Guidelines

### Content Language
All user-facing content should be in **Korean**. Component names and code should be in English, but UI text, metadata, and content should be Korean.

### Component Development
- Use shadcn/ui components as base, customize with Tailwind classes
- Follow the existing theming system with primary/accent color variables
- Implement responsive design with mobile-first approach
- Add appropriate Korean text and maintain cultural appropriateness

### Firebase Usage
- Admin functionality uses Firebase Auth, Firestore for data, Storage for files
- Environment variables must be properly configured for Firebase services
- Use the existing Firebase configuration in `/lib/firebase.ts`

### Code Style
- TypeScript strict mode enabled
- Use `@/*` path mapping for imports
- Follow the existing component patterns and file organization
- Tailwind CSS for styling with the custom theme configuration

### Admin Features
The project includes an admin dashboard at `/admin` with:
- User authentication and management
- Inquiry management system
- Settings configuration
- Protected routes with Firebase Auth

When working with this codebase, maintain the Korean language for user content, follow the established design system, and ensure Firebase integration works properly for admin functionality.