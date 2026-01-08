# Getting Started with Lumina

This guide will help you set up and customize the Lumina SaaS Kit for your project.

## Prerequisites

- Node.js (v16.0.0 or higher)
- NPM or Yarn or PNPM

## Step 1: Initial Setup

After installing the dependencies with `npm install`, you should test the environment:

```bash
npm run dev
```

If the server starts at `http://localhost:5173`, you are good to go.

## Step 2: Customizing the Sidebar

The sidebar navigation is defined in `src/components/layout/Sidebar.tsx`.
You can modify the `menuItems` array to change the links:

```typescript
const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Users, label: 'Customers', active: false },
  // Add your new items here
  { icon: Settings, label: 'Settings', active: false },
];
```

## Step 3: Global Styles

We use a custom Scrollbar implementation in `src/index.css` to ensure the app looks consistent across OSs.

The application background color is set in the `body` tag in `index.html` via Tailwind classes: 
`bg-background text-text-main`. To change the global background, check `tailwind.config.js` or edit the HTML class directly.

## Step 4: Routing

Currently, the app uses a simple structure in `App.tsx`. For larger applications, we recommend installing `react-router-dom`:

```bash
npm install react-router-dom
```

And wrapping the application in a `BrowserRouter`.

## Common Issues

**Vite not recognized?**
Ensure you have run `npm install` to link the binaries.

**Tailwind styles not applying?**
Check `tailwind.config.js` content paths to ensure it scans all your new files.
