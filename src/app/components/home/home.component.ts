import { Component } from '@angular/core';
import { Image } from '../../types/imagetypes';
import { ImageAdapter } from '../../adapters/image.adapter';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public imagesData: Image[] = [];
  constructor(private imgAdapter: ImageAdapter) {}

  public onSearch(searchFilter: string) {
    this.imgAdapter
      .search(searchFilter)
      .subscribe((data: Image[]) => (this.imagesData = data));
  }
}
