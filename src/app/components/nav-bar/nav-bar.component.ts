import { Component } from '@angular/core';
//
import { ElementRef, ViewChild, } from '@angular/core';
//
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  /// Nav bar Link Text Animation  /// Nav bar Link Text Animation
  @ViewChild('navLinkText', { static: false }) navLinkText!: ElementRef; 
  constructor() {}
  ngAfterViewInit(): void {
    const textElement = this.navLinkText.nativeElement;
    const text = textElement.innerText;
    textElement.innerHTML = text.split('').map((letter: string) => {
      return `<span class="letter">${letter}</span>`;
    }).join('');
  }
  /// Nav bar Link Text Animation  /// Nav bar Link Text Animation


  
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
}
