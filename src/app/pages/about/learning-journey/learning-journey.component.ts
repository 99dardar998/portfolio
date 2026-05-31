import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Milestone {
  period: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-learning-journey',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './learning-journey.component.html',
  styleUrl: './learning-journey.component.scss'
})
export class LearningJourneyComponent {
  milestones: Milestone[] = [
    {
      period: '2016–2021',
      title: 'Early Curiosity',
      description: 'First contact with HTML and CSS. Building simple webpages out of curiosity, no formal instruction. The beginning of an obsession with making things work through code.'
    },
    {
      period: 'Sep 2022',
      title: 'Starting at PXL',
      description: 'Enrolled in Applied Computer Science at PXL University of Applied Sciences. First formal programming courses: Java fundamentals, database design, web development basics.'
    },
    {
      period: '2022–2023',
      title: 'First Year – Building the Foundation',
      description: 'Learned Java systematically, built first proper data structures, wrote first real algorithms. Discovered that understanding why things work matters more than memorizing how they work.'
    },
    {
      period: '2023–2024',
      title: 'Second Year – Going Deeper',
      description: 'Spring Boot, Angular, MongoDB, Docker, SQL databases. First fullstack projects. Participated in Tech & Meet series, started understanding what professional software development actually looks like.'
    },
    {
      period: '2024–2025',
      title: 'Third Year – Putting It Together',
      description: 'System design thinking, software architecture, CI/CD, meaningful project work. Building this e-portfolio. Preparing for internship. Connecting the dots between all the things learned.'
    },
    {
      period: 'Next',
      title: 'Internship & Beyond',
      description: 'Entering a professional environment to apply, validate, and expand everything learned. The beginning of a career, not the end of learning.'
    }
  ];
}
