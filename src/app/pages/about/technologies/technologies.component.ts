import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TechEntry {
  name: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  technologies: TechEntry[] = [
    {
      name: 'Angular',
      category: 'Frontend Framework',
      description: 'My primary frontend framework. I build standalone component applications using the latest Angular features including Signals, lazy routing, and the new control flow syntax. Angular\'s opinionated structure suits the kind of large, well-organized SPAs I enjoy building.'
    },
    {
      name: 'Spring Boot',
      category: 'Backend Framework',
      description: 'My main backend framework. I use Spring Boot to build RESTful APIs with Spring Data, Spring Security, and Spring MVC. I\'m comfortable with dependency injection, configuration, and the broader Spring ecosystem.'
    },
    {
      name: 'MongoDB',
      category: 'Database',
      description: 'Document database I use for projects that benefit from flexible schemas. I understand aggregation pipelines, indexing strategies, and embedding vs referencing trade-offs. I use it with Spring Data MongoDB in Java projects.'
    },
    {
      name: 'Git & GitHub',
      category: 'Version Control',
      description: 'Daily use. Feature branch workflow, pull requests, code review, GitHub Actions for CI/CD. I understand rebasing, cherry-picking, and conflict resolution. Clean commit history is something I actively maintain.'
    },
    {
      name: 'Docker',
      category: 'Containerization',
      description: 'I containerize all my projects. I write multi-stage Dockerfiles for both frontend and backend applications, use docker-compose for local development environments, and understand the basics of container networking and volume management.'
    },
    {
      name: 'Linux',
      category: 'Operating System',
      description: 'I\'m comfortable in Linux environments – navigating the filesystem, managing processes, writing shell scripts, configuring services, and using package managers. Most of my server-side work happens on Ubuntu or Debian.'
    },
    {
      name: 'Windows CMD / PowerShell',
      category: 'Shell',
      description: 'Practical daily-use knowledge of the Windows command line for file management, process handling, environment variables, and scripting basic automation tasks in development workflows.'
    },
    {
      name: 'SCSS',
      category: 'Styling',
      description: 'My styling tool of choice. I write modular, component-scoped SCSS using variables, mixins, nesting, and CSS custom properties. I maintain consistent design tokens and use BEM-inspired naming conventions.'
    }
  ];
}
