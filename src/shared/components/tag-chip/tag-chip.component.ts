import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tag-chip',
  standalone: true,
  imports: [NgClass],
  template: `<span class="chip" [ngClass]="color">{{ label }}</span>`,
  styles: [`
    .chip {
      display: inline-block;
      padding: 0.2rem 0.65rem;
      border-radius: 100px;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.03em;
      font-weight: 500;
      background: var(--accent-muted);
      color: var(--accent);
      border: 1px solid var(--accent-border);
    }
    .green {
      background: rgba(52, 211, 153, 0.1);
      color: #34d399;
      border-color: rgba(52, 211, 153, 0.25);
    }
    .amber {
      background: rgba(251, 191, 36, 0.1);
      color: #fbbf24;
      border-color: rgba(251, 191, 36, 0.25);
    }
    .rose {
      background: rgba(251, 113, 133, 0.1);
      color: #fb7185;
      border-color: rgba(251, 113, 133, 0.25);
    }
  `]
})
export class TagChipComponent {
  @Input() label = '';
  @Input() color: 'default' | 'green' | 'amber' | 'rose' = 'default';
}
