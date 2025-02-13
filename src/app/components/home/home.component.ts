import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('1.2s ease-out')), 
    ]),
    trigger('fadeOut', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateY(-30px)' })),
      transition('visible => hidden', animate('1s ease-in')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  showAnimation = false;
  hideAnimation = false;
  ngOnInit() {
    let hasVisited = sessionStorage.getItem('hasVisited');  /// sessionStorage Instead of LocalStorage
    if (!hasVisited) {
      this.showAnimation = true;
      setTimeout(() => {
        this.hideAnimation = true;
      }, 2000);
      setTimeout(() => {
        this.showAnimation = false;
      }, 3000);
      sessionStorage.setItem('hasVisited', 'true');  /// sessionStorage Instead of LocalStorage
    }
  }
}


