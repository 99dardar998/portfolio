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
      period: '2005',
      title: 'Birth',
      description: 'At this stage in life , i was just chilling.'
    },
    {
      period: '2015',
      title: 'Tasting code',
      description: 'An introvert was forced by his parents to join coder dojo where his cousin was an helper and found an passion.'
    },
    {
      period: '2017 - 2021',
      title: 'Industrial siences',
      description: 'I knew i wanted to learn how to program so i chose to learn this in secondary school but at most i was taught low code programs and basic arduino code.'
    },
    {
      period: '2022 - 2024',
      title: 'Elektronics and coding',
      description: 'due to an lack of programming leading to an lack interest i failed most my classes and was forced to choose another path , luckily there was one where i would learn much more of what i wanted.'
    },
    {
      period: '2024- now',
      title: 'Howest',
      description: 'After taking an higher education very serious and visiting a lot of schools i chose for Howest to study TI at and have not regretted it since.'
    },
    {
      period: 'Next',
      title: 'Work',
      description: 'After spending the better part of 21 years in school i want to taste programming in an different setting and we will see where i end up in the future.'
    }
  ];
}
