import { Component, ViewChild } from '@angular/core';
import { ImageModalComponent } from '../../image-modal/image-modal.component';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrl: './css.component.scss'
})
export class CssComponent {
 @ViewChild('imageModal') imageModal: ImageModalComponent | undefined;
  openImage(imageSrc: string): void {
    if (this.imageModal) {
      this.imageModal.open(imageSrc);  
    }
  }
}
