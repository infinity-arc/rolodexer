import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, take } from 'rxjs/operators'



@Injectable({
	providedIn: 'root'
})
export class DataService {

	private _cards: any;

	constructor(private http: HttpClient) {

	}

	getCards(callback: (error: unknown, payload: any) => void) {
		const subscription = this.http.get('assets/data.json')
			.pipe(take(1), finalize(() => subscription.unsubscribe))
			.subscribe(
				{
					next: (payload: any) => {
						console.log(payload);
						if(!this._cards) {
							this._cards = payload
						}
						callback(null, this.cards);
					},
					error: (error: unknown) => {
						console.log(error);
						callback(error, null)
					}
				});
	}

	get cards() {
		return this._cards.index.map(id=>{
			return this._cards.cards.find(card => card.id === id);
		});
	}


	reorder(reorderedCards: ICard[]){
		this._cards.index = reorderedCards.map(card => card.id);
		this._cards.cards = reorderedCards;
		console.log(this._cards.index);

	}
}
