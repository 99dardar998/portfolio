import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Arthur Holsbeke – Home'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About – Arthur Holsbeke'
  },
  {
    path: 'about/who-am-i',
    loadComponent: () =>
      import('./pages/about/who-am-i/who-am-i.component').then(m => m.WhoAmIComponent),
    title: 'Who Am I – Arthur Holsbeke'
  },
  {
    path: 'about/programming-languages',
    loadComponent: () =>
      import('./pages/about/programming-languages/programming-languages.component').then(m => m.ProgrammingLanguagesComponent),
    title: 'Programming Languages – Arthur Holsbeke'
  },
  {
    path: 'about/technologies',
    loadComponent: () =>
      import('./pages/about/technologies/technologies.component').then(m => m.TechnologiesComponent),
    title: 'Technologies & Tools – Arthur Holsbeke'
  },
  {
    path: 'about/learning-journey',
    loadComponent: () =>
      import('./pages/about/learning-journey/learning-journey.component').then(m => m.LearningJourneyComponent),
    title: 'Learning Journey – Arthur Holsbeke'
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./pages/events/event-list/event-list.component').then(m => m.EventListComponent),
    title: 'Events – Arthur Holsbeke'
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import('./pages/events/event-detail/event-detail.component').then(m => m.EventDetailComponent),
    title: 'Event Detail – Arthur Holsbeke'
  },
  {
    path: 'events/hackathon',
    loadComponent: () =>
      import('./pages/events/hackaton/hackaton.component').then(m => m.HackathonComponent),
    title: 'Hackathon – Arthur Holsbeke'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects – Arthur Holsbeke'
  },
  {
    path: 'website-creation',
    loadComponent: () =>
      import('./pages/website-creation/website-creation.component').then(m => m.WebsiteCreationComponent),
    title: 'How I Built This Website – Arthur Holsbeke'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact – Arthur Holsbeke'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
