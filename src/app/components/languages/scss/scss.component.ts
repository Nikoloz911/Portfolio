import { Component, ViewChild } from '@angular/core';
import { ImageModalComponent } from '../../image-modal/image-modal.component';
@Component({
  selector: 'app-scss',
  templateUrl: './scss.component.html',
  styleUrl: './scss.component.scss'
})
export class ScssComponent {
  @ViewChild('imageModal') imageModal: ImageModalComponent | undefined;
  openImage(imageSrc: string): void {
    if (this.imageModal) {
      this.imageModal.open(imageSrc);  
    }
  }
}
