import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterLinkWithHref,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
