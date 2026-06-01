import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventsService } from '../../../core/services/events.service';
import {Event} from '../../../../shared/models/event.model'
import { TagChipComponent } from '../../../../shared/components/tag-chip/tag-chip.component';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [RouterLink, TagChipComponent],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private eventsService = inject(EventsService);

  event = signal<Event | undefined>(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.event.set(this.eventsService.getEventById(id));
    }
  }

}
