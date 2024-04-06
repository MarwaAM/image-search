import { Component } from '@angular/core';

import { ImageAdapter } from '../../adapters/image.adapter';
import { Image } from '../../types/imagetypes';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	public imagesData: Image[] = [];
	constructor(private imgAdapter: ImageAdapter) {}

	public onSearch(searchFilter: string) {
		this.imgAdapter.search(searchFilter).subscribe((data: Image[]) => (this.imagesData = data));
	}
}
