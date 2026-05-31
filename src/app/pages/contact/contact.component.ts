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
      value: 'arthur.holsbeke@student.pxl.be',
      href: 'mailto:arthur.holsbeke@student.pxl.be',
      icon: '✉️',
      description: 'Best for detailed enquiries or internship opportunities.'
    },
    {
      label: 'GitHub',
      value: 'github.com/artholsbeke',
      href: 'https://github.com/artholsbeke',
      icon: '⌥',
      description: 'Browse my public repositories and open source contributions.'
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
