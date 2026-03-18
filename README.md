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

Figma Link:
https://www.figma.com/design/vu2AX3BpLpLvfxPk1Y3Grf/Untitled?node-id=0-1&t=GHB2dSyDfVJJbYg8-1


Live Link:

You can check out the live site running here:
https://gym-web-teal-eta.vercel.app/
