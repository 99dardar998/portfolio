import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TagChipComponent } from '../../../../shared/components/tag-chip/tag-chip.component';

@Component({
  selector: 'app-hackathon',
  standalone: true,
  imports: [RouterLink, TagChipComponent],
  templateUrl: './hackathon.component.html',
  styleUrl: './hackathon.component.scss'
})
export class HackathonComponent {
  technologies = ['Linux', 'SSH', 'Nginx', 'Server Management', 'DevOps'];

  teamMembers = [
    { name: 'Arthur Holsbeke', role: 'Software Engineering Student' },
    { name: 'Friend & Teammate', role: 'Cybersecurity Student' }
  ];

  galleryItems = [
    'Team working session',
    'Server configuration',
    'Zoo visit activity',
    'Final presentation',
    'Results gathering',
    'Team photo'
  ];
}
