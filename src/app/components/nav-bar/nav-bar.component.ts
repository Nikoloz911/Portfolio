import { Component, HostListener } from '@angular/core';
import { Router,} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  lastScroll = 0;

  constructor(private router: Router) {}
  /// ROUTER FOR NAV-BAR LINKS   /// ROUTER FOR NAV-BAR LINKS
  isActive(route: string): boolean {
    return this.router.url === route || (route === '/' && this.router.url === '/');
  }
  /// ROUTER FOR NAV-BAR LINKS   /// ROUTER FOR NAV-BAR LINKS

  /// SCROLL FUNCTION ON NAV BAR   /// SCROLL FUNCTION ON NAV BAR
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    let currentScroll = window.pageYOffset;
    let navbar = document.querySelector('#nav-bar') as HTMLElement;
    if (navbar) {
      if (currentScroll > this.lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
      }
      else if (currentScroll < this.lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        setTimeout(() => {
          navbar.classList.add('scroll-up');
        });  
      }
      this.lastScroll = currentScroll;
    }
  }
    /// SCROLL FUNCTION ON NAV BAR   /// SCROLL FUNCTION ON NAV BAR
}
