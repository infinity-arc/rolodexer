import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, take } from 'rxjs/operators'



@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) {

	}

	getCards(callback: (error: unknown, payload: any) => void) {
		const subscription = this.http.get('assets/data.json')
			.pipe(take(1), finalize(() => subscription.unsubscribe))
			.subscribe(
				{
					next: (payload: any) => {
						callback(null, payload);
					},
					error: (error: unknown) => {
						callback(error, null)
					}
				});
	}
}
