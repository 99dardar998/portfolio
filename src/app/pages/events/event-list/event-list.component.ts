import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../../core/services/events.service';
import { TagChipComponent } from '../../../../shared/components/tag-chip/tag-chip.component';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [RouterLink, TagChipComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {
  private eventsService = inject(EventsService);
  events = this.eventsService.events;
}
