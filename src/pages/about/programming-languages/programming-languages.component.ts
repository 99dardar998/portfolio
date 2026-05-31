import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface LanguageEntry {
  name: string;
  level: string;
  levelColor: 'green' | 'amber' | 'rose';
  description: string;
  useCase: string;
}

@Component({
  selector: 'app-programming-languages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './programming-languages.component.html',
  styleUrl: './programming-languages.component.scss'
})
export class ProgrammingLanguagesComponent {
  languages: LanguageEntry[] = [
    {
      name: 'Java',
      level: 'Advanced',
      levelColor: 'green',
      description: 'My primary backend language. I\'ve used Java extensively throughout my studies, building REST APIs, console applications, and data processing tools. Spring Boot is where most of my Java work lives.',
      useCase: 'Spring Boot APIs, console apps, academic projects'
    },
    {
      name: 'TypeScript',
      level: 'Advanced',
      levelColor: 'green',
      description: 'My frontend language of choice. I write TypeScript daily in the context of Angular projects. The type system is a genuine productivity multiplier, and I use strict mode religiously.',
      useCase: 'Angular applications, Node.js tooling'
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      levelColor: 'green',
      description: 'The foundation beneath TypeScript. I understand the runtime deeply enough to debug transpilation issues, manage async patterns, and build vanilla JS tools when needed.',
      useCase: 'Browser scripting, Node.js, lightweight tooling'
    },
    {
      name: 'C#',
      level: 'Intermediate',
      levelColor: 'amber',
      description: 'I\'ve used C# in several academic and personal projects, primarily with .NET 8 Web API and Entity Framework Core. The language feels similar to Java in many ways, which made adoption straightforward.',
      useCase: '.NET Web APIs, Entity Framework, Windows apps'
    },
    {
      name: 'HTML',
      level: 'Advanced',
      levelColor: 'green',
      description: 'Semantic HTML is something I take seriously. I write accessible, well-structured markup that works without CSS as a baseline before layering on styles.',
      useCase: 'Web frontend, Angular templates'
    },
    {
      name: 'CSS / SCSS',
      level: 'Advanced',
      levelColor: 'green',
      description: 'I use SCSS on all my web projects, leveraging variables, mixins, nesting, and custom properties. I enjoy the craft of CSS and spend time making layouts that work correctly across device sizes.',
      useCase: 'Web UI, Angular component styles, design systems'
    },
    {
      name: 'SQL',
      level: 'Intermediate',
      levelColor: 'amber',
      description: 'Comfortable with joins, subqueries, aggregations, and basic query optimization. I\'ve used SQL in both MySQL and SQL Server contexts, typically through ORM layers but also raw queries when needed.',
      useCase: 'MySQL, SQL Server, database design'
    }
  ];
}
