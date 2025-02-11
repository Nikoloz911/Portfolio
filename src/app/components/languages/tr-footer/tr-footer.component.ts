import { Component } from '@angular/core';

@Component({
  selector: 'app-tr-footer',
  templateUrl: './tr-footer.component.html',
  styleUrl: './tr-footer.component.scss'
})
export class TrFooterComponent {
  sendEmail(): void {
    window.location.href = 'mailto:nikalobjanidze014@gmail.com';
  } 
}
