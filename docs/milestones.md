# 🚀 CodeAgent – Project Milestones

This document outlines all the key development milestones for building the CodeAgent AI tutoring platform using Next.js, Clerk, Supabase, and Vapi.

Each milestone contains a set of core tasks to be completed before moving to the next phase of development.

---

## 🧱 Milestone 1: Initial Setup

**Goal:** Establish the project foundation and development environment.

- Set up a new Next.js app (App Router)
- Install and configure ShadCN UI
- Add TypeScript support and folder structure
- Add utility helpers (`cn`, `siteConfig`, etc.)

---

## 🧭 Milestone 2: Routing & Core Layout

**Goal:** Set up routing, navigation, and base pages.

- Create all base routes (`/`, `/agents`, `/profile`, etc.)
- Build reusable `Navbar` and `NavItems` component
- Implement responsive `Home` page layout

---

## 👤 Milestone 3: Authentication & Billing

**Goal:** Enable user authentication, account management, and billing integration.

- Set up Clerk for user auth (sign in / sign up / session)
- Implement Clerk billing system (Stripe portal)
- Add Clerk subscription check for premium features

---

## 💾 Milestone 4: Supabase Setup & Integration

**Goal:** Enable user data storage, session tracking, and Agent database features.

- Set up Supabase project and database schema
- Sync Clerk users to Supabase (webhook or sync)
- Implement Supabase integration for Agents, Sessions, and Bookmarks

---

## 🤖 Milestone 5: Agent Builder & AI Interaction

**Goal:** Create and manage AI Tutors (Agents) and enable real-time conversations.

- Build the Agent creation form (name, topic, voice, style)
- Store Agent data in Supabase
- Create Agent Library UI (filter by user, popular, category)
- Set up Vapi voice AI SDK
- Build Agent Conversation UI with voice/text interaction

---

## 📚 Milestone 6: User History & Bookmarks

**Goal:** Track user learning sessions and saved content.

- Store completed sessions in a user session history table
- Build the Journey page to visualize learning progress
- Add bookmarks for Agents or saved sessions

---

## 🧑‍💻 Milestone 7: Profile & Personalization

**Goal:** Allow users to manage their personal data and preferences.

- Display user profile info (from Clerk)
- Show user’s created Agents, bookmarks, and history
- Optional: Allow users to delete Agents or history entries

---

## 🧪 Milestone 8: Monitoring & Debugging

**Goal:** Add observability to the app for error tracking and debugging.

- Set up Sentry for error monitoring
- Log errors from frontend and backend
- Create fallback error boundaries for UI errors

---

## 🚀 Milestone 9: Deployment & Launch

**Goal:** Prepare and deploy the MVP to production.

- Set up `.env` and configure production environment
- Deploy to Vercel
- Test all user flows: auth, create Agent, talk with Agent, upgrade, etc.
- Announce MVP launch!

---

### ✅ Optional Milestone: Post-MVP Enhancements

- Dark mode support
- Search bar for agents
- Leaderboard of most used Agents
- Gamification or learning streak system
- Code challenges integrated with agents

---

*Last updated: {{date}}*
