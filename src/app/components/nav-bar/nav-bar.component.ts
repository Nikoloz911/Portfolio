import { Component } from '@angular/core';
//
import { Router,} from '@angular/router';
//
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(private router: Router) {}
  isActive(route: string): boolean {
    return this.router.url === route || (route === '/' && this.router.url === '/');
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

