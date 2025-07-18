
# 🤖 CodeAgent

**CodeAgent** is an AI-powered learning platform where users create and interact with custom AI tutors (called Agents) focused on Computer Science topics like programming, data science, machine learning, and more.

Whether you're learning Python loops or neural networks, CodeAgent helps you build personalized Agents that teach, quiz, and converse with you — via text or voice.

---

## 🧠 Key Features

- 🔐 **Authentication with Clerk** – Secure sign-up, login, and session handling
- 💳 **Subscriptions** – Stripe billing for upgrading Agent limits and unlocking features
- 🧾 **Agent Builder** – Create personalized AI tutors with configurable voices, tones, and topics
- 📚 **Agent Library** – View your saved Agents or browse trending Agents from others
- 🗣 **Interactive Lessons** – Talk to your Agent via text or AI-powered voice (Vapi)
- 📖 **Learning History** – Track sessions and completed topics in the Journey page
- 📌 **Bookmarks** – Save Agents or lessons to revisit later
- 📈 **Profile Dashboard** – View your account, learning activity, and preferences

---

## 🛠 Tech Stack

| Layer           | Tech/Tool                     |
|-----------------|-------------------------------|
| Frontend        | **Next.js (App Router)**, TypeScript, ShadCN UI |
| Auth            | **Clerk**                     |
| Database        | **Supabase**                  |
| Voice AI (opt)  | **Vapi**                      |
| Payments        | **Stripe**                    |
| Monitoring      | **Sentry**                    |
| Deployment      | **Vercel**                    |

---

## 🚧 Current Status

🚀 MVP in development  
✅ Planning completed  
✅ Authentication + routes scaffolded  
🛠 Agent Builder in progress  
🗂 Milestones tracked via GitHub Projects

---

## 📁 Project Structure (High-Level)

```

/app             → Next.js App Router structure
/components      → Shared UI components
/docs            → User stories, milestones, and planning docs
/design          → Figma exports, UI mockups
/lib             → Utilities and helper functions (e.g. cn.ts)

````

---

## 🧩 Core Milestones

See [`docs/milestones.md`](./docs/milestones.md) for full milestone breakdown.

- Milestone 0: Planning & Research (user stories, Figma, setup)
- Milestone 1: Next.js Setup
- Milestone 2: Routing & Navbar
- Milestone 3: Auth + Clerk Integration
- Milestone 4: Supabase Setup + Sync
- Milestone 5: Agent Builder + AI Interaction
- Milestone 6: Agent Library + Bookmarks
- Milestone 7: Session History + Journey Page
- Milestone 8: Monitoring (Sentry) + Error Tracking
- Milestone 9: Deployment to Vercel

---

## ✍️ Example User Stories

See [`docs/user-stories.md`](./docs/user-stories.md)

- **Create an AI Tutor** – Users can build an Agent for a specific topic and tone.
- **Talk with an Agent** – Interact via chat or voice to learn a concept.
- **Track Progress** – View learning history and resume incomplete lessons.
- **Upgrade Subscription** – Unlock additional features with Stripe billing.
- **Browse Popular Agents** – View trending AI tutors used by others.

---

## 🎨 Design

Figma designs for core pages (Home, Agent Builder, Dashboard) can be found in [`/docs/design.md`](./docs/design.md).

- 🧭 Consistent layout with App Router and ShadCN components
- 🎨 Theme-ready with Tailwind + dark mode support (optional)
- 📱 Mobile responsiveness planned

---
<!-- 
## 🧪 Local Setup Instructions

1. Clone the repo  
    ```bash
   git clone https://github.com/your-username/codeagent.git
   cd codeagent
    ````

2. Install dependencies

    ```bash 
   pnpm install
     ```

3. Add your environment variables in `.env.local`

4. Run the development server

   ```bash
   pnpm dev
   ```

---

## 🌐 Deployment

* Hosted on [Vercel](https://vercel.com)
* Use GitHub Actions or Vercel Deploy Hooks for CI/CD

---

## 📌 Contribution

This is a solo project, but contributions, feedback, and collaboration ideas are welcome!

Check out [`CONTRIBUTING.md`](./CONTRIBUTING.md) for guidelines.

---

## 📫 Contact

Created by **[Amelia](https://github.com/your-username)**
Feel free to reach out via GitHub or open an issue!

---
 -->

