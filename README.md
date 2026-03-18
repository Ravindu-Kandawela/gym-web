Project Name:
Apex Fitness Gym Website

The Tech Stack:

I built this project using some of my favorite modern web tools:
- React 19 and TypeScript: For building a solid, type-safe UI under the hood.
- Vite: Because fast local development is a must.
- Tailwind CSS v4: Used heavily for styling the sleek dark mode, spacing, and responsive layouts.
- Lenis: For buttery smooth, momentum-based page scrolling.
- Motion: To give the site that premium, dynamic feel with scroll animations.
- Zod and Sonner: Zod handles the form validation perfectly, and Sonner pops up those nice little toast notifications when you submit.
- EmailJS: Hooked this up to the contact form so it fires off real emails to both the admin and the user.
- Lucide React: For crisp, lightweight SVG icons.


Project Architecture & Folder Structure:

Here is an overview of how I organize a clean, scalable React project:

src/
├── assets/         (Static images and visual assets)
├── components/     (Reusable global components)
│   └── ui/         (Granular UI parts like Buttons & Forms)
├── constants/      (Global data arrays to keep components clean)
├── pages/          (Major layout sections driving the app)
│   └── component components...
├── services/       (API calls and external logic scripts)
├── App.tsx         (Main layout wrapper and section assembler)
├── index.css       (Global Tailwind CSS rules and variables)
└── main.tsx        (React DOM entry point)


Bonus Points Criteria Checklist:

✓ Dark mode: Fully implemented a global dark mode toggle using Tailwind's dark utility and localStorage to persist user preference.
✗ Search / filter functionality: Not currently implemented.
✓ Animations: Fully implemented smooth scrolling with Lenis, and complex scroll-triggered component reveal animations using Framer Motion (`motion/react`).
✓ API integration: Fully implemented integrating the EmailJS API to securely process and dispatch live emails via REST endpoint.
✓ Advanced form handling: Fully implemented using Zod schema validation to strictly validate user inputs, catch errors dynamically, and provide seamless UI feedback via Sonner toasts before firing API logic.

How to Run It Locally:

If you want to pull this down and run it on your own machine, it is super easy.

1. Clone the repo
git clone https://github.com/Ravindu-Kandawela/gym-web.git
cd gym-web

2. Install the dependencies
npm install
(or yarn install)

3. Set up your environment variables
Since the contact form uses EmailJS, you will need your own API keys. I left an .env.example file you can copy to .env using:
cp .env.example .env
Open up that new .env file and drop in your EmailJS Service ID, Template IDs, and Public Key.

4. Start the dev server
npm run dev
(or yarn dev)
Pop open your browser to http://localhost:5173 and you are good to go.


Live Link:

You can check out the live site running here:
[Insert Your Live Link Here]
