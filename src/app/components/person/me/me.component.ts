import { Component } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent {
  goToLink() {
    window.open('https://ge.itstep.org/programming-ge', '_blank');
  }
  
}
