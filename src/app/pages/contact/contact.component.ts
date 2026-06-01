import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formSubmitted = signal(false);

  name = '';
  email = '';
  subject = '';
  message = '';

  contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: 'holsbekearthur@gmail.com',
      href: 'holsbekearthur@gmail.com',
      icon: '✉️',
      description: 'Do not mail me pls , i dont read my mails.'
    },
    {
      label: 'Podcast',
      value: 'The podcast',
      href: 'https://open.spotify.com/episode/3NoBiIgbIyD2YaNuTTqQOB',
      icon: '⌥',
      description: 'this is an podcast me an cousin of mine and my friend made.'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/arthur-holsbeke',
      href: 'https://linkedin.com/in/arthur-holsbeke',
      icon: 'in',
      description: 'Connect professionally or reach out via message.'
    }
  ];

  onSubmit(): void {
    // Non-functional form – demonstrates the UI only
    this.formSubmitted.set(true);
  }

  resetForm(): void {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
    this.formSubmitted.set(false);
  }
}
