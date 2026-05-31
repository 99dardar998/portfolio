import { Injectable, signal } from '@angular/core';
import { Project } from '../../../shared/models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projectsData: Project[] = [
    {
      id: 'student-management-api',
      name: 'Student Management API',
      description: 'RESTful API for managing student records, courses, and grades built with Spring Boot and MongoDB.',
      longDescription: `A full-featured REST API built during the second year of studies to explore Spring Boot's ecosystem in depth. The API handles CRUD operations for student entities, course enrollment, grade management, and basic reporting. Authentication is handled via Spring Security with JWT tokens. Data is persisted in MongoDB using Spring Data MongoDB, with carefully designed document schemas that balance query performance and flexibility.`,
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Spring Security', 'JWT', 'Docker'],
      githubUrl: 'https://github.com/artholsbeke/student-management-api',
      year: '2023',
      status: 'completed'
    },
    {
      id: 'taskflow',
      name: 'TaskFlow',
      description: 'A full-stack task management application with real-time updates, built with Angular and a C# .NET backend.',
      longDescription: `TaskFlow is a Kanban-style task management application that allows users to create boards, lists, and cards. The frontend is built with Angular 17 using standalone components and Angular Signals for state management. The backend is a C# .NET 8 Web API with Entity Framework Core and a SQL Server database. SignalR is used for real-time board updates across connected clients.`,
      technologies: ['Angular', 'TypeScript', 'SCSS', 'C#', '.NET 8', 'SQL Server', 'SignalR'],
      githubUrl: 'https://github.com/artholsbeke/taskflow',
      year: '2024',
      status: 'in-progress'
    },
    {
      id: 'devjournal',
      name: 'DevJournal',
      description: 'A developer blog and learning journal CLI tool that generates static sites from Markdown files.',
      longDescription: `DevJournal is a command-line tool built in TypeScript that converts a directory of Markdown files into a statically generated HTML blog. It supports frontmatter metadata, syntax highlighting, tag-based filtering, and an RSS feed. The tool was built to explore Node.js, file system APIs, and static site generation concepts. The generated output requires no server – it's pure HTML, CSS, and JavaScript.`,
      technologies: ['TypeScript', 'Node.js', 'Markdown', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/artholsbeke/devjournal',
      year: '2023',
      status: 'completed'
    },
    {
      id: 'shoptrack',
      name: 'ShopTrack',
      description: 'Inventory management system with barcode scanning support, built for a local small business as a practical project.',
      longDescription: `ShopTrack is a desktop-oriented web application designed for small retail businesses to manage their inventory. Built as a practical real-world project, it features product catalog management, stock level tracking, low-stock alerts, and basic sales reporting. The frontend uses Angular with a custom SCSS design system, while the backend is a Spring Boot application backed by a MySQL database. A barcode scanning integration was added using a JavaScript library that reads from a USB scanner input stream.`,
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
      githubUrl: 'https://github.com/artholsbeke/shoptrack',
      year: '2024',
      status: 'completed'
    }
  ];

  readonly projects = signal<Project[]>(this.projectsData);

  getAllProjects(): Project[] {
    return this.projectsData;
  }
}
