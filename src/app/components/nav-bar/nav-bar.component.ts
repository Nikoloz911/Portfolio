import { Component, HostListener } from '@angular/core';
import { Router,} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  /// NAV-BAR TEXT ANIMATIONS  /// NAV-BAR TEXT ANIMATIONS
  ngAfterViewInit(): void {
    const navBarLinks = document.querySelectorAll('.nav-bar-link');
  
    navBarLinks.forEach((link) => {
      const letters = link.querySelectorAll('.letter');
      letters.forEach((letter, index) => {
        (letter as HTMLElement).style.setProperty('--index', index.toString());
      });
    });
  }
  /// NAV-BAR TEXT ANIMATIONS  /// NAV-BAR TEXT ANIMATIONS
  
  lastScroll = 0;
  scrollThreshold: number = 80;
  constructor(private router: Router) {}
  /// ROUTER FOR NAV-BAR LINKS   /// ROUTER FOR NAV-BAR LINKS
  isActive(route: string): boolean {
    return this.router.url === route || (route === '/' && this.router.url === '/');
  }
  /// ROUTER FOR NAV-BAR LINKS   /// ROUTER FOR NAV-BAR LINKS

  /// SCROLL FUNCTION ON NAV BAR    /// SCROLL FUNCTION ON NAV BAR
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    let navbar = document.querySelector('.nav-bar') as HTMLElement;
    let currentScroll = window.pageYOffset;
  
    if (navbar) {
      if (currentScroll < this.scrollThreshold) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
      } else if (currentScroll > this.lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
      } else if (currentScroll < this.lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
      }
      this.lastScroll = currentScroll;
    }
  }
    /// SCROLL FUNCTION ON NAV BAR   /// SCROLL FUNCTION ON NAV BAR
}