import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ArticleCard {
  title: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  articles: ArticleCard[] = [
    {
      title: 'Who Am I',
      description: 'A personal introduction – where I come from, what drives me, and who I am as a student and aspiring engineer.',
      route: '/about/who-am-i',
      icon: '👤'
    },
    {
      title: 'Programming Languages',
      description: 'An honest breakdown of the languages I work with – from my strongest to the ones I\'m actively building up.',
      route: '/about/programming-languages',
      icon: '{ }'
    },
    {
      title: 'Technologies & Tools',
      description: 'Frameworks, databases, DevOps tools, and the environment I use to build and ship software.',
      route: '/about/technologies',
      icon: '⚙️'
    },
    {
      title: 'Learning Journey',
      description: 'The path from complete beginner to where I am today – the struggles, the milestones, and what\'s next.',
      route: '/about/learning-journey',
      icon: '🗺️'
    }
  ];
}
