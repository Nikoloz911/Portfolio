import { Component, ViewChild } from '@angular/core';
import { ImageModalComponent } from '../../image-modal/image-modal.component';
@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrl: './html.component.scss'
})
export class HtmlComponent  {
  @ViewChild('imageModal') imageModal: ImageModalComponent | undefined;
  openImage(imageSrc: string): void {
    if (this.imageModal) {
      this.imageModal.open(imageSrc);  
    }
  }
}
