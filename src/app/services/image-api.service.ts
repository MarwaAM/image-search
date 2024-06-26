import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { sampleData } from '../sampleData';
import { ApiResonse } from '../types/imagetypes';

@Injectable({
	providedIn: 'root',
})
export class ImageApiService {
	private apiUrl = 'https://api.unsplash.com/search/photos?query=';
	private apikey = environment.API_KEY;
	constructor(private httpClient: HttpClient) {}

	public search(searchWord: string): Observable<ApiResonse> {
		if (!this.apikey) {
			console.log('No API Key Found, Running On Sample Data');
			return of(sampleData as ApiResonse);
		}
		return this.httpClient.get<ApiResonse>(`${this.apiUrl}${searchWord}`, {
			headers: {
				Authorization: `Client-ID ${this.apikey}`,
			},
		});
	}
}
