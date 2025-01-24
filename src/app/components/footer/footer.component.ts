import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  sendEmail(): void {
    window.location.href = 'mailto:nikalobjanidze014@gmail.com';
  }  
}
