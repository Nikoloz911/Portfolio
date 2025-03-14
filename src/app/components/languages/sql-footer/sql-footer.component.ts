import { Component } from '@angular/core';

@Component({
  selector: 'app-sql-footer',
  templateUrl: './sql-footer.component.html',
  styleUrl: './sql-footer.component.scss'
})
export class SqlFooterComponent {
  sendEmail(): void {
    window.location.href = 'mailto:nikalobjanidze014@gmail.com';
  } 
}
