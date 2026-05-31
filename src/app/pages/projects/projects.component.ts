import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../core/services/projects.service';
import { TagChipComponent } from '../../../shared/components/tag-chip/tag-chip.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TagChipComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);
  projects = this.projectsService.projects;

  statusColor(status: string): 'green' | 'amber' | 'rose' {
    return status === 'completed' ? 'green' : status === 'in-progress' ? 'amber' : 'rose';
  }

  statusLabel(status: string): string {
    return status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Planned';
  }
}
