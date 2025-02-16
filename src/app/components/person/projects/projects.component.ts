import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 openLinkEmis() {
    window.open('https://Your-link', '_blank');
  }
  openLinkSkolebi() {
    window.open('https://Your-link', '_blank');
  }
  openLinkZoomer() {
    window.open('https://Your-link', '_blank');
  }
  openLinkDoctor() {
    window.open('https://html-css-lobjo-2.netlify.app/', '_blank');
  }
  openLinkFigma() {
    window.open('https://html-css-lobjo-1.netlify.app/', '_blank');
  }
}
