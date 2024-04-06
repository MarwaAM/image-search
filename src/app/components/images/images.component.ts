import { Component, Input } from '@angular/core';

import { Image } from '../../types/imagetypes';

@Component({
	selector: 'app-images',
	templateUrl: './images.component.html',
	styleUrl: './images.component.scss',
})
export class ImagesComponent {
	@Input() imageData: Image | undefined;
}
