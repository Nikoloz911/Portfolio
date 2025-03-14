import { Component, ViewChild } from '@angular/core';
import { ImageModalComponent } from '../../image-modal/image-modal.component';
@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrl: './sql.component.scss'
})
export class SQLComponent {
@ViewChild('imageModal') imageModal: ImageModalComponent | undefined;
  openImage(imageSrc: string): void {
    if (this.imageModal) {
      this.imageModal.open(imageSrc);  
    }
  }
}
