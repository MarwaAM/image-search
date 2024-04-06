import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ImageApiService } from '../services/image-api.service';
import { Image } from '../types/imagetypes';

@Injectable({
	providedIn: 'root',
})
export class ImageAdapter {
	constructor(private imageApi: ImageApiService) {}

	public search(searchWord: string): Observable<Image[]> {
		return this.imageApi.search(searchWord).pipe(
			map(({ results }) =>
				results.map(img => ({
					id: img.id,
					url: img.urls.thumb,
					fullSize: img.urls.full,
					likes: img.likes,
				})),
			),
		);
	}
}
