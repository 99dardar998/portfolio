import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Projects', path: '/projects' },
    { label: 'This Website', path: '/website-creation' },
    { label: 'Contact', path: '/contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobile(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobile(): void {
    this.mobileMenuOpen.set(false);
  }
}
