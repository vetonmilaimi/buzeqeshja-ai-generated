# Buzëqeshja - Dental Clinic Landing Page

> 🤖 **This project was fully created using AI tools** - demonstrating the power of AI-assisted web development.

A modern, professional landing page for a dental clinic built with cutting-edge web technologies. Features a clean blue/cyan design, smooth animations, and a complete appointment booking system.

![Dental Clinic Website](https://img.shields.io/badge/Made%20with-AI-blue?style=for-the-badge)
![Astro](https://img.shields.io/badge/Astro-5.16-FF5D01?style=for-the-badge&logo=astro)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🏠 Home Page
- **Hero Section** - Eye-catching circular image with gradient background
- **Stats Bar** - Key metrics (2000+ patients, 15+ years, 10+ specialists)
- **Services Grid** - 6 dental services with icons and descriptions
- **Testimonials** - Patient reviews with 5-star ratings
- **Doctor Profile** - Professional bio with credentials
- **Clinic Gallery** - Photo showcase with hover effects
- **FAQ Section** - Accordion-style frequently asked questions
- **Contact Form** - Full contact information with form

### 📅 Appointment Booking Page
- **Interactive Calendar** - Date picker with smart validation
- **Service Selection** - Dropdown with 7 dental services
- **Time Slot Picker** - 16 available appointment times
- **Contact Form** - Name, email, phone, and notes
- **Info Cards** - Working hours, confirmation time, contact details

### 🎨 Design Features
- **Modern Blue/Cyan Theme** - Professional medical aesthetic
- **Smooth Scroll Navigation** - Animated transitions between sections
- **Active Link Highlighting** - Visual feedback for current section
- **Responsive Design** - Mobile-first approach with perfect tablet/desktop layouts
- **Hover Effects** - Interactive cards and buttons
- **Gradient Backgrounds** - Subtle blue gradients throughout

### 🌍 Localization
- **Complete Albanian Translation** - All content in Albanian language
- Professional medical terminology
- User-friendly interface text

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Modern static site generator
- **[React](https://react.dev)** - UI components with TypeScript
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first styling
- **[Shadcn UI](https://ui.shadcn.com)** - High-quality component library
- **[Lucide React](https://lucide.dev)** - Beautiful icon set

### Shadcn Components Used
- Button, Card, Input, Textarea
- Calendar, Select, Accordion
- Sheet (mobile navigation)
- Carousel (testimonials)

## 📁 Project Structure

\`\`\`
buzeqeshja/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── AppointmentForm.tsx
│   │   ├── ClinicGallery.tsx
│   │   ├── ContactForm.tsx
│   │   ├── DoctorProfile.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   └── Testimonials.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro      # Home page
│   │   └── termin.astro     # Appointment page
│   ├── styles/
│   │   └── global.css       # Tailwind + custom styles
│   └── public/
│       └── images/          # Generated AI images
├── package.json
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

\`\`\`bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd buzeqeshja

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Visit [http://localhost:4321](http://localhost:4321) to view the site.

### Build for Production

\`\`\`bash
# Build the site
npm run build

# Preview the build
npm run preview
\`\`\`

## 📄 Pages

### Home (`/`)
Complete landing page with all sections:
- Hero with circular image
- Statistics bar
- Services grid
- Patient testimonials
- Doctor profile
- Clinic photo gallery
- FAQ accordion
- Contact form

### Appointment Booking (`/termin`)
Dedicated appointment scheduling page:
- Interactive calendar
- Service and time selection
- Contact form
- Info cards

## 🎨 Color Scheme

\`\`\`css
Primary: oklch(0.65 0.15 210)    /* Cyan/Blue */
Accent:  oklch(0.88 0.08 210)    /* Light Blue */
Background: oklch(0.99 0 0)      /* Off-white */
Foreground: oklch(0.2 0.02 250)  /* Dark Navy */
\`\`\`

## 🤖 AI-Generated Content

This entire project was created using AI tools, including:
- ✅ Complete codebase (Astro, React, TypeScript)
- ✅ Component architecture and design
- ✅ Responsive layouts and styling
- ✅ Albanian translations
- ✅ Professional medical images (AI-generated)
- ✅ Color scheme and design system
- ✅ Smooth animations and interactions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Features

- Static site generation (SSG)
- Optimized images
- Code splitting
- Minimal JavaScript
- Fast page loads

## � Customization

### Update Colors
Edit `src/styles/global.css` to change the color scheme.

### Add New Services
Edit `src/components/Services.tsx` to add/modify services.

### Change Content
All text content is in Albanian and can be easily modified in the respective component files.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **AI Tools** - Entire project generated with AI assistance
- **Astro Team** - Amazing static site framework
- **Shadcn** - Beautiful component library
- **Tailwind CSS** - Excellent utility-first CSS framework

---

**Made with 🤖 AI** | **Project Name**: Buzëqeshja (The Smile)
