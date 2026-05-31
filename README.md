# Arthur Holsbeke – E-Portfolio

Personal e-portfolio built with **Angular 18+** as part of the Applied Computer Science – Software Engineering programme at PXL University of Applied Sciences, Hasselt.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Angular 18 (standalone components) |
| Language | TypeScript (strict mode) |
| Styling | SCSS with CSS custom properties |
| Routing | Angular Router with lazy loading + view transitions |
| State | Angular Signals |
| Build | Angular CLI / esbuild |

---

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root component (navbar + router-outlet + footer)
│   ├── app.config.ts             # Application configuration (providers)
│   ├── app.routes.ts             # All route definitions (lazy-loaded)
│   │
│   ├── core/
│   │   ├── components/
│   │   │   ├── navbar/           # Fixed top navigation with scroll detection
│   │   │   └── footer/           # Site-wide footer
│   │   └── services/
│   │       ├── events.service.ts    # Mock event data + signal
│   │       ├── projects.service.ts  # Mock project data + signal
│   │       └── skills.service.ts    # Skills data + signal
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── card/             # Reusable card wrapper
│   │   │   └── tag-chip/         # Technology / tag pill component
│   │   └── models/
│   │       ├── event.model.ts
│   │       ├── project.model.ts
│   │       └── skill.model.ts
│   │
│   └── pages/
│       ├── home/                 # Hero + skills overview + highlights
│       ├── about/
│       │   ├── about.component   # Article cards index
│       │   ├── who-am-i/
│       │   ├── programming-languages/
│       │   ├── technologies/
│       │   └── learning-journey/
│       ├── events/
│       │   ├── event-list/       # All events overview cards
│       │   ├── event-detail/     # Reusable detail page (driven by route :id)
│       │   └── hackathon/        # Dedicated hackathon write-up page
│       ├── projects/             # Project cards grid
│       ├── website-creation/     # "How I Built This" article with sticky TOC
│       └── contact/              # Contact links + non-functional form demo
│
└── styles/
    ├── main.scss                 # Entry point (imports below)
    ├── _variables.scss           # CSS custom properties (design tokens)
    ├── _reset.scss               # Modern CSS reset
    └── _utilities.scss           # Containers, buttons, page-hero, article prose
```

---

## Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (comes with Node)
- **Angular CLI** 18.x

```bash
node --version   # Should be ≥ 18
npm --version    # Should be ≥ 9
```

---

## Installation

### 1. Create the Angular project (from scratch)

```bash
ng new e-portfolio --routing --style=scss --standalone
cd e-portfolio
```

### 2. Copy all source files

Replace the contents of `src/` with the files in this repository, following the structure above exactly.

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
ng serve
# or
npm start
```

Open your browser at **http://localhost:4200**

---

## Build for Production

```bash
ng build
# Output in dist/e-portfolio/
```

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About index |
| `/about/who-am-i` | Who Am I article |
| `/about/programming-languages` | Programming Languages article |
| `/about/technologies` | Technologies & Tools article |
| `/about/learning-journey` | Learning Journey article |
| `/events` | Events overview |
| `/events/tech-meet-1` | Tech & Meet 1 detail |
| `/events/tech-meet-2` | Tech & Meet 2 detail |
| `/events/tech-meet-3` | Tech & Meet 3 detail |
| `/events/tech-meet-4` | Tech & Meet 4 detail |
| `/events/hackathon` | Hackathon dedicated page |
| `/projects` | Projects grid |
| `/website-creation` | How I Built This |
| `/contact` | Contact page |

---

## Key Angular Features Used

- **Standalone components** – no NgModules anywhere
- **Angular Signals** – reactive state in services and components
- **Lazy-loaded routes** – `loadComponent()` on every route
- **New control flow** – `@if`, `@for`, `@else` in templates
- **View Transitions API** – `withViewTransitions()` for page animations
- **Route titles** – declared on each route definition

---

## Design System

All design tokens are CSS custom properties defined in `src/styles/_variables.scss`:

```scss
--accent:         #7c6ff7;   // Electric indigo
--bg:             #0a0a0f;   // Near-black background
--surface:        #111118;   // Card surfaces
--text-primary:   #f0f0f8;   // Main text
--text-secondary: #9191aa;   // Body text
--font-display:   'Syne';    // Headings
--font-body:      'DM Sans'; // Body copy
--font-mono:      'DM Mono'; // Code, labels, chips
```

---

*Built by Arthur Holsbeke · PXL University of Applied Sciences · Software Engineering 2024–2025*
