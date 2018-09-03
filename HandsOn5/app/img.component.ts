import {Component} from '@angular/core';

@Component({
  selector: 'image-manager',
  templateUrl: 'app/manager/img.component.html'
})
export class ImageManagerComponent {
    public imageSource: string;
    public potentialImageSource: string;

    save() {
        this.imageSource = this.potentialImageSource;
    }
}