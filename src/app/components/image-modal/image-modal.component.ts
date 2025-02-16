import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss'
})
export class ImageModalComponent {
  @Input() imageSrc: string = '';  
  isVisible: boolean = false;  

  open(imageSrc: string): void {
    this.imageSrc = imageSrc;
    this.isVisible = true; 
    this.lockScroll(); 
  }
  close(): void {
    this.isVisible = false;  
    this.unlockScroll();  
  }
  private lockScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private unlockScroll(): void {
    document.body.style.overflow = ''; 
  }
}
