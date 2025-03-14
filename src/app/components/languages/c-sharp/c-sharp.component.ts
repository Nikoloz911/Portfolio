import { Component, ViewChild } from '@angular/core';
import { ImageModalComponent } from '../../image-modal/image-modal.component';
@Component({
  selector: 'app-c-sharp',
  templateUrl: './c-sharp.component.html',
  styleUrl: './c-sharp.component.scss'
})
export class CSharpComponent {
 @ViewChild('imageModal') imageModal: ImageModalComponent | undefined;
  openImage(imageSrc: string): void {
    if (this.imageModal) {
      this.imageModal.open(imageSrc);  
    }
  }
}
