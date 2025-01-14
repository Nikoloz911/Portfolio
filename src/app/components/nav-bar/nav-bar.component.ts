import { Component, HostListener, Renderer2 } from '@angular/core';
//
import { Router,   } from '@angular/router';
//
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  lastScroll = 0; // Track the last scroll position

  constructor(private router: Router, private renderer: Renderer2) {}

  // Check if the current route is active
  isActive(route: string): boolean {
    return this.router.url === route || (route === '/' && this.router.url === '/');
  }

  // HostListener listens to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset;
    const navBar = document.getElementById('nav-bar'); // Get the navbar by ID

    // Check if the navbar exists
    if (navBar) {
      // If scrolling down, hide navbar
      if (currentScroll > this.lastScroll) {
        this.renderer.removeClass(navBar, 'scroll-up');
      } else {
        // If scrolling up, show navbar
        this.renderer.addClass(navBar, 'scroll-up');
      }
    }

    this.lastScroll = currentScroll; // Update the last scroll position
  }
}








  
  
//   let body = document.body;
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   let currentScroll = window.pageYOffset;
//   if (currentScroll <= 0) {
//     body.classList.remove("scroll-up");
//     return;
//   }

//   if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
//     body.classList.remove("scroll-up");
//     body.classList.add("scroll-down");
//   } else if (
//     currentScroll < lastScroll &&
//     body.classList.contains("scroll-down")
//   ) {
//     body.classList.remove("scroll-down");
//     body.classList.add("scroll-up");
//   }
//   lastScroll = currentScroll;
// });

