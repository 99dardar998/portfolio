import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-who-am-i',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './who-am-i.component.html',
  styleUrl: './who-am-i.component.scss'
})
export class WhoAmIComponent {}
