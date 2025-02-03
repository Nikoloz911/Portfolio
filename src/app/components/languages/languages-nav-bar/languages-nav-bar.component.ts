import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-languages-nav-bar',
  templateUrl: './languages-nav-bar.component.html',
  styleUrl: './languages-nav-bar.component.scss'
})
export class LanguagesNavBarComponent {
  constructor(private router: Router) {}
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
