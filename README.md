Based on the content from your live site and the code you've shared, here's a comprehensive README for your IEEE SMC ISIMS SB website repository.

---

# IEEE SMC ISIMS SB Official Website

[![Live Site](https://img.shields.io/badge/live_site-smc--isims.ieee.tn-blue)](https://smc-isims.ieee.tn/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

Official website for the IEEE Systems, Man, and Cybernetics Society Student Branch at ISIMS (Sfax, Tunisia). Showcases the branch's activities, achievements, team, and upcoming events.

![Website Preview](https://smc-isims.ieee.tn/static/og-image.png)

## ✨ Features

- **Modern, responsive design** – Optimized for all devices
- **Dark/Light theme toggle** – User preference saved via body class
- **Dynamic award cards** – Alternating image/text layout for multiple awards
- **Animated content** – Scroll-triggered reveals using Framer Motion
- **Achievements & Milestones** – Showcase events, workshops, and hackathons
- **Team profiles** – Board members with roles
- **Newsletter signup** – Integrated subscription form
- **Contact section** – Location map, phone, email

## 🚀 Tech Stack

| Category       | Technologies |
|----------------|--------------|
| Frontend       | React 18, TypeScript |
| Styling        | CSS Modules / Custom CSS |
| Animations     | Framer Motion |
| Icons          | React Icons (or custom SVGs) |
| Build Tool     | Vite |
| Deployment     | Netlify / Vercel / GitHub Pages |

## 📁 Project Structure

```
src/
├── Components/
│   ├── About/           # "What is IEEE?" section
│   ├── Achievements/    # Milestones/events timeline
│   ├── Awards/          # Award cards (alternating layout)
│   ├── Contact/         # Contact form & info
│   ├── Counter/         # Stats (members, bootcamps, etc.)
│   ├── Footer/          # Global footer
│   ├── Header/          # Navigation bar
│   ├── Hero/            # Welcome banner
│   ├── Newsletter/      # Email subscription
│   ├── Services/        # Core focus areas (AI, CPS, etc.)
│   ├── Team/            # Executive committee
│   └── Testimonial/     # (Optional) member testimonials
├── App.tsx              # Main layout & theme provider
├── App.css              # Global styles
├── main.tsx             # Entry point
└── assets/              # Images, logos, etc.
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ieee-smc-isims-website.git
   cd ieee-smc-isims-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Content Management Guide

### Updating Awards (Awards Section)

The awards component supports **alternating layouts** (image left/text right for the first award, image right/text left for the second). To add or modify awards, edit `src/Components/Awards/Awards.tsx`:

```tsx
const awardsData: Award[] = [
  {
    title: "2025 Tunisia Section Outstanding Student Chapter Award",
    description: "The award highlights Student Chapters that advance IEEE's...",
    achievements: [
      "Organized 12+ technical workshops with 500+ attendees",
      "Community outreach impacting 800+ students",
      "6 industry–academia collaborative events"
    ],
    link: "https://ieee.tn/awards/...",
    imageUrl: "/images/award-2025.jpg",
    alt: "Award certificate"
  },
  // Add more awards here (layout alternates automatically)
];
```

### Adding Team Members

Edit `src/Components/Team/Team.tsx`:

```tsx
const teamMembers = [
  { name: "ISMAIL REBAI", role: "CHAIR", image: "/team/ismail.jpg" },
  { name: "SHAYMA BEN HECHMI", role: "VICE CHAIR", image: "/team/shayma.jpg" },
  // ...
];
```

### Adding Events/Milestones

Edit `src/Components/Achievements/Achievements.tsx` (or the corresponding component). Each milestone requires a **date**, **title**, and **description**.

### Updating Statistics (Counter)

Modify `src/Components/Counter/Counter.tsx`:

```tsx
const stats = [
  { number: 30, label: "Active members" },
  { number: 4, label: "Running bootcamps" },
  { number: 14, label: "Achievements" }
];
```

### Contact Information

Update `src/Components/Contact/Contactus.tsx` with:

- Address (Pôle Technologique de Sfax, Sakiet Ezzit)
- Phone number
- Email (isims@ieee.org)

## 🎨 Styling & Theming

- **Light theme**: `body.light-theme` class
- **Dark theme**: default (or vice versa)
- CSS variables used for colors – edit `App.css` or component CSS files to change branding.

**Theme toggle** is handled in `App.tsx` via `changeTheme()` function and passed down as props.

### Manual build (for any static hosting)

```bash
npm run build
# Upload the 'dist' folder to your server
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow existing component structure
- Keep CSS modular (prefer component-specific CSS files)
- Use `useInView` from Framer Motion for scroll animations

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

**Webmaster**: Youssef Dhouib  
**Email**: isims@ieee.org  
**Address**: RQQ4+MVX, pôle technologique de sfax, Sakiet Ezzit 3021, Tunisia

---

*Built with ❤️ by the IEEE SMC ISIMS SB team.*
