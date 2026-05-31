import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillsService } from '../../core/services/skill.service';
import { TagChipComponent } from '../../../shared/components/tag-chip/tag-chip.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TagChipComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private skillsService = inject(SkillsService);
  skillCategories = this.skillsService.skillCategories;
}
