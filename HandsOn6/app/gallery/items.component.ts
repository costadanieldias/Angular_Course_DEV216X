import {Component} from '@angular/core';
import {LogoItem} from './items.model';
import {MSFT_LOGOS} from './items.data';

@Component({
  selector: 'gallery-items',
  templateUrl: 'app/views/items.component.html'
})
export class GalleryItemsComponent {
    public logos: LogoItem[] = MSFT_LOGOS;
}