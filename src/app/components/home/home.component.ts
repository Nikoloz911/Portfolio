import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit {
  showAnimation = false;
  hideAnimation = false;
  
  ngOnInit(): void {
    let hasVisited = sessionStorage.getItem('hasVisited');  /// sessionStorage Instead of LocalStorage
    if (!hasVisited) {
      this.showAnimation = true;
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        this.hideAnimation = true;
      }, 2000);
      setTimeout(() => {
        this.showAnimation = false;
        document.body.style.overflow = '';
      }, 3000);
      sessionStorage.setItem('hasVisited', 'true');  /// sessionStorage Instead of LocalStorage
    }
  }
  
  ngAfterViewInit(): void {
    this.setupButtonEffect();
  }
  
  downloadResume(): void {
    let link = document.createElement('a');
    link.href = 'assets/resume/nika.pdf';
    link.download = 'Nikoloz_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  private setupButtonEffect(): void {
    let button = document.querySelector('.resume-button') as HTMLElement;
    let gradientOverlay = document.querySelector('.gradient-overlay') as HTMLElement;
    if (button && gradientOverlay) {
      button.addEventListener('mousemove', (e: MouseEvent) => {
        let rect = button.getBoundingClientRect();
        let x = e.clientX - rect.left; 
        let y = e.clientY - rect.top;     
        let xPercent = Math.round((x / rect.width) * 100);
        let yPercent = Math.round((y / rect.height) * 100);
        
        gradientOverlay.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(66, 153, 225, 0.8) 0%, rgba(255, 255, 255, 0) 70%)`;
        gradientOverlay.style.opacity = '0.5';
      });
      
      button.addEventListener('mouseleave', () => {
        gradientOverlay.style.opacity = '0';
      });
    }
  }
}