import { Injectable, signal } from '@angular/core';
import { Project } from '../../../shared/models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projectsData: Project[] = [
{
      id: 'Adria',
      name: 'hypotatical land scout rover',
      description: 'scouting rover for checking signs of life.',
      longDescription: `In an group we build an rover with sensors checking how habital an area is and sending this data to an backend where you can use an nice frontend to check all needed data to determin whether you want to live there or not.`,
      technologies: ['Java', 'Vue', 'github'],
      githubUrl: '',
      year: '2024',
      status: 'completed'
    },
    {
      id: 'Doolhof',
      name: 'Doolhof',
      description: 'making an small game to learn how to make frontend and backend.',
      longDescription: `One of the first projects we did for school where we needed to recreate an popular board game in an large group , it was made in such a way to easely teach us about frontend and backend.`,
      technologies: ['html', 'javascript', 'CSS', 'java', 'gitlab', 'sonar'],
      githubUrl: '',
      year: '2023',
      status: 'completed'
    },
    {
      id: 'PRIVATE',
      name: 'music management',
      description: 'a combo of other repos and mine to fill the gaps.',
      longDescription: `an project where i use multiple repos for differnt jobs and patch the work in between using docker , bash and Golang.`,
      technologies: ['Docker', 'bash', 'Go'],
      githubUrl: '',
      year: '2026',
      status: 'completed'
    },
  ];

  readonly projects = signal<Project[]>(this.projectsData);

  getAllProjects(): Project[] {
    return this.projectsData;
  }
}
