import { Component, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  isDropdownOpen = false;

handleDropdown(open: boolean): void {
  this.isDropdownOpen = open;
}

  /// DROPDOWN FUNCTION   /// DROPDOWN FUNCTION   /// DROPDOWN FUNCTION
  @ViewChild(DropdownComponent) dropdownComponent!: DropdownComponent;
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (this.dropdownComponent) {
      this.dropdownComponent.onClickOutside(event);
    }
  }
  /// DROPDOWN FUNCTION   /// DROPDOWN FUNCTION   /// DROPDOWN FUNCTION

  /// BURGER MENU FUNCTION  /// BURGER MENU FUNCTION
  isBurgerMenuOpen = false;
  toggleBurgerMenu(): void {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }
  /// BURGER MENU FUNCTION  /// BURGER MENU FUNCTION

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

  /// ROUTER FOR NAV-BAR LINKS   /// ROUTER FOR NAV-BAR LINKS
  constructor(private router: Router) {}
  isActive(route: string): boolean {
    return this.router.url === route || (route === '/' && this.router.url === '/');
  }
  /// ROUTER FOR NAV-BAR LINKS   /// ROUTER FOR NAV-BAR LINKS

  /// SCROLL FUNCTION ON NAV BAR    /// SCROLL FUNCTION ON NAV BAR
  lastScroll = 0;
  scrollThreshold: number = 80;

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
