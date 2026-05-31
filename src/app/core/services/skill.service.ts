import { Injectable, signal } from '@angular/core';
import { Skill, SkillCategory } from '../../shared/models/skill.model';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly skillCategoriesData: SkillCategory[] = [
    {
      label: 'Languages',
      skills: [
        { name: 'Java', level: 'advanced', category: 'language' },
        { name: 'TypeScript', level: 'advanced', category: 'language' },
        { name: 'JavaScript', level: 'advanced', category: 'language' },
        { name: 'C#', level: 'intermediate', category: 'language' },
        { name: 'HTML', level: 'advanced', category: 'language' },
        { name: 'CSS / SCSS', level: 'advanced', category: 'language' },
        { name: 'SQL', level: 'intermediate', category: 'language' }
      ]
    },
    {
      label: 'Frameworks & Libraries',
      skills: [
        { name: 'Angular', level: 'advanced', category: 'framework' },
        { name: 'Spring Boot', level: 'advanced', category: 'framework' },
        { name: '.NET', level: 'intermediate', category: 'framework' }
      ]
    },
    {
      label: 'Databases',
      skills: [
        { name: 'MongoDB', level: 'intermediate', category: 'database' },
        { name: 'MySQL', level: 'intermediate', category: 'database' },
        { name: 'SQL Server', level: 'beginner', category: 'database' }
      ]
    },
    {
      label: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 'advanced', category: 'tool' },
        { name: 'GitHub', level: 'advanced', category: 'tool' },
        { name: 'Docker', level: 'intermediate', category: 'devops' },
        { name: 'Linux', level: 'intermediate', category: 'devops' },
        { name: 'Windows CMD', level: 'intermediate', category: 'tool' }
      ]
    }
  ];

  readonly skillCategories = signal<SkillCategory[]>(this.skillCategoriesData);

  getAllSkills(): Skill[] {
    return this.skillCategoriesData.flatMap(c => c.skills);
  }

  getSkillCategories(): SkillCategory[] {
    return this.skillCategoriesData;
  }
}
