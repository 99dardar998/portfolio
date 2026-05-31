import { Component } from '@angular/core';
import { TagChipComponent } from '../../../shared/components/tag-chip/tag-chip.component';

interface Section {
  id: string;
  title: string;
  content: string[];
}

@Component({
  selector: 'app-website-creation',
  standalone: true,
  imports: [TagChipComponent],
  templateUrl: './website-creation.component.html',
  styleUrl: './website-creation.component.scss'
})
export class WebsiteCreationComponent {
  techStack = ['Angular 18', 'TypeScript', 'SCSS', 'Angular Router', 'Angular Signals', 'Standalone Components'];

  sections: Section[] = [
    {
      id: 'planning',
      title: 'Planning',
      content: [
        `Before writing a single line of code, I spent time mapping out what this portfolio needed to accomplish. The primary audience is potential internship supervisors and employers – people who will spend roughly 2–3 minutes scanning the site before deciding whether to read more carefully. That constraint shaped every design and content decision.`,
        `I created a simple content inventory: every page, every section, every piece of content I wanted to include. From that list, I derived the routing structure – a flat, clear hierarchy where every page is reachable in one or two clicks. I wrote a brief brief (genuinely, a one-page document) covering purpose, audience, tone, and the technical constraints I wanted to honour.`
      ]
    },
    {
      id: 'design',
      title: 'Design Decisions',
      content: [
        `The visual direction was deliberately restrained: dark background, high contrast, a monospaced accent font for metadata, a display font for headings, and a single accent colour. The goal was to look professional and technically credible without trying to be a graphic designer portfolio – I'm a software engineer, and the design should communicate that.`,
        `I chose a dark theme as the default because it suits the audience – developers and technical reviewers spend hours in dark-themed IDEs and are comfortable with it. The card-based layout creates visual hierarchy without requiring complex grid logic, and it scales naturally to mobile without aggressive breakpoint work.`,
        `Typography decisions were deliberate: Syne for display text (opinionated, modern, confident), DM Sans for body copy (readable at small sizes), and DM Mono for all metadata labels, code, and chip text (technical without being ostentatious).`
      ]
    },
    {
      id: 'why-angular',
      title: 'Why Angular',
      content: [
        `Angular was the natural choice for two reasons: it's the framework I know best, and building this portfolio was partly an exercise in demonstrating that knowledge in a real, visible project. Using something I'm less familiar with would have been a slower build and a less authentic showcase.`,
        `Angular 18's standalone component model made the architecture clean. No NgModule declarations to maintain – every component is self-contained and imports exactly what it needs. The new control flow syntax (@if, @for) made templates more readable. Angular Signals replaced the handful of RxJS observables I might previously have reached for, keeping reactive state simple and explicit.`,
        `The Router's lazy loading meant each page only loads its code when visited, keeping the initial bundle lean. View Transitions (provideRouter with withViewTransitions()) added smooth page-to-page animations with a single configuration line.`
      ]
    },
    {
      id: 'routing',
      title: 'Routing',
      content: [
        `The routing configuration in app.routes.ts defines every route in the application using lazy-loaded components. Each route points to a loadComponent() call that imports the page component on demand. This means the home page loads instantly and the rest of the application loads progressively as the user navigates.`,
        `Route titles are set declaratively on each route definition, so the browser tab reflects the current page without any additional component logic. Nested routes under /about give each article its own URL, enabling deep linking and back-navigation from any article page.`,
        `A wildcard route at the bottom redirects unknown paths to the home page, preventing blank 404 states.`
      ]
    },
    {
      id: 'components',
      title: 'Components',
      content: [
        `The component architecture follows a clear hierarchy: core components (Navbar, Footer) live in src/app/core and are used in the root AppComponent. Shared, reusable UI elements (CardComponent, TagChipComponent) live in src/app/shared. Page-specific components live in src/app/pages, each in their own directory with .ts, .html, and .scss files.`,
        `The EventDetailComponent is the most architecturally interesting piece: it's a single reusable component that renders any of the four Tech & Meet events based on the route parameter. An injected EventsService retrieves the correct event data object by ID, and the template renders it dynamically. This avoids four nearly-identical components while keeping the data model clean.`,
        `Angular Signals are used in the service layer (events, projects, skills all expose signal<T[]>()) and in components that need reactive state like the Navbar's scroll detection (isScrolled = signal(false)) and mobile menu state (mobileMenuOpen = signal(false)).`
      ]
    },
    {
      id: 'styling',
      title: 'Styling',
      content: [
        `All styling is SCSS. Global design tokens are defined as CSS custom properties on :root in _variables.scss – colours, typography, spacing, shadows, border radii. This means changing the accent colour or font is a single-line change that propagates everywhere.`,
        `Each component has its own .scss file scoped to its selector. Component styles don't leak out and global styles don't bleed in unexpectedly. The only global styles that exist are truly global: typography defaults, the container class, page-hero layouts, article-content prose styles, and button styles that appear across multiple pages.`,
        `The responsive design uses a mobile-first approach with SCSS media query mixins. Most layouts are CSS Grid with auto-fill/minmax patterns that naturally reflow at small sizes without needing many explicit breakpoints.`
      ]
    },
    {
      id: 'challenges',
      title: 'Challenges',
      content: [
        `The biggest challenge was content, not code. Writing 300–500 words for each Tech & Meet event, each about article, and the website creation page itself took significantly longer than building the components. Good writing is hard, and writing honestly about your own learning is harder still. I went through multiple drafts of the "Who Am I" article before landing on a tone that felt authentic rather than marketing-copy smooth.`,
        `The second challenge was managing the balance between completeness and shipping. There were features I wanted – a dark/light theme toggle, a filtering system for projects, animated skill progress bars – that I cut because they weren't essential to the portfolio's purpose. Deciding what not to build is a real skill, and one the hackathon had already started to sharpen.`,
        `SCSS scoping occasionally caused issues when global styles needed to coexist with component styles. The solution was disciplined: anything that appears in more than one component belongs in the global stylesheet; anything unique to one component belongs in that component's .scss file.`
      ]
    },
    {
      id: 'learned',
      title: 'What I Learned',
      content: [
        `Building something real and public forces a different quality standard than academic projects. Knowing this site will be reviewed by actual engineers made me refactor things I might have left "good enough" in a coursework context. The navbar scroll behaviour, the mobile menu animation, the event detail routing pattern – all were iterated on more than they technically needed to be because I wanted them to be right.`,
        `Angular Signals are genuinely excellent for component-level state. The mental model is simpler than RxJS for the class of problems this portfolio needed to solve, and the code is noticeably easier to read. I'll continue using them as the default for reactive state in Angular projects.`,
        `CSS custom properties combined with SCSS are a powerful combination. Using custom properties for the design token layer means the values are available at runtime (useful for dynamic theming later), while SCSS handles the structural and compositional parts of the stylesheet.`
      ]
    },
    {
      id: 'future',
      title: 'Future Improvements',
      content: [
        `A dark/light theme toggle is the most commonly requested feature in portfolio feedback. I deliberately deferred it to keep the scope manageable, but the CSS custom property architecture means adding it would be straightforward: a signal holding the current theme, a class toggle on the root element, and a second set of custom property values.`,
        `I'd like to add filtering to the Projects page – filter by technology or status. The data model already supports it; it's a matter of adding signal-based filter state and a pipe or computed signal to filter the displayed list.`,
        `Longer term, connecting the portfolio to a headless CMS would allow content updates without code changes. The structured data model (events, projects as typed interfaces) maps cleanly to CMS content types. This would be particularly useful as I accumulate more events and projects over the coming years.`
      ]
    }
  ];
}
