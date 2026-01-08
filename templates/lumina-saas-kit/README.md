# Lumina SaaS Kit ⚡

![Lumina SaaS Kit Banner](https://via.placeholder.com/1200x600?text=Lumina+SaaS+Kit)

> **Premium React Dashboard Template** featuring a modern "Obsidian & Neon" aesthetic, built with Vite, Tailwind CSS, and Framer Motion.

## 🚀 Overview

Lumina is a production-ready dashboard template designed for modern SaaS applications. It replaces boring admin panels with a high-performance, visually stunning interface that feels like a native desktop app. 

### Key Features

- **⚡ Blazing Fast**: Built on Vite + React 18 for instant HMR and builds.
- **🎨 Glassmorphism Design**: Custom "Glass" UI components with blurred backdrops and refined borders.
- **📱 Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.
- **✨ Framer Motion**:  Smooth page transitions and micro-interactions.
- **🛠 TypeScript**: 100% typed for strict development.
- **🌗 Dark Mode Native**: Built from the ground up for dark themes.

## 📦 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Language**: TypeScript

## 🛠 Installation

1. **Clone the repository** (if you haven't already extracted the zip):
   ```bash
   git clone <your-repo>
   cd lumina-saas-kit
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in the browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable Glass UI components (Button, Card, Input)
│   ├── layout/      # Sidebar, TopBar, DashboardLayout
├── pages/           # Application views
│   ├── dashboard/   # Main dashboard analytics view
├── utils/           # Helper functions (cn, etc.)
├── App.tsx          # Main Router Setup
├── main.tsx         # Entry Point
└── index.css        # Tailwind directives & Custom CSS
```

## 🎨 Customization configuration

Tailwind config is located in `tailwind.config.js`. You can easily change the primary color scheme by modifying the `colors` object:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#7c3aed', // Change this hex code to rebrand the entire app
      // ...
    }
  }
}
```

## 📄 License

Commercial License. Redistribution of the source code without permission is prohibited.

---
*Created by DesignEase Team*
