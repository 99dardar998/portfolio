import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TagChipComponent } from '../../../../shared/components/tag-chip/tag-chip.component';

@Component({
  selector: 'app-hackathon',
  standalone: true,
  imports: [RouterLink, TagChipComponent],
  templateUrl: './hackaton.component.html',
  styleUrl: './hackaton.component.scss'
})
export class HackathonComponent {
  technologies = ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'MongoDB', 'Docker', 'SCSS'];

  teamMembers = [
    { name: 'Arthur Holsbeke', role: 'Frontend / Architecture' },
    { name: 'Team Member 2', role: 'Backend Development' },
    { name: 'Team Member 3', role: 'Backend / Database' },
    { name: 'Team Member 4', role: 'UI Design / Frontend' }
  ];

  galleryItems = [
    'Team working session',
    'Whiteboard architecture',
    'Demo presentation',
    'Award ceremony',
    'Working prototype',
    'Team photo'
  ];
}
