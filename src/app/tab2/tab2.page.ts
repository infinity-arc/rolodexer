import { DataService } from './../services/data.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tab2Page {
	/* PROPERTIES */
	public cards: ICard[];
	public error: unknown;
	public cardsCount: number;
	/* CONSTRUCTOR */
	constructor(private _dataService: DataService, private _ref: ChangeDetectorRef) {
		console.log('CONSTRUCT');
		this.cardsCount = 0;
		this._getCards();

	}

	private _getCards() {
		this._dataService.getCards((error, payload) => {
			if (error) {
				this.error = error;
			}
			this.cards = payload;
			this.cardsCount = payload.length;
			this._ref.detectChanges();
		});
	}

	doReorder(event: any) {
		event.detail.complete(this.cards);
		this._dataService.reorder(this.cards);
		console.log(this.cards);
		this._ref.detectChanges();
	}

}
