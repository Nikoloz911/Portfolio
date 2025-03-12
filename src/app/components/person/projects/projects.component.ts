import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 openLinkEmis() {
    window.open('https://emis-ge.vercel.app/', '_blank');
  }
  openLinkSkolebi() {
    window.open('https://skolebi-emis-ge.vercel.app/', '_blank');
  }
  openLinkZoomer() {
    window.open('https://zoomerge.vercel.app/', '_blank');
  }
  openLinkDoctor() {
    window.open('https://html-css-lobjo-2.netlify.app/', '_blank');
  }
  openLinkFigma() {
    window.open('https://html-css-lobjo-1.netlify.app/', '_blank');
  }
}
