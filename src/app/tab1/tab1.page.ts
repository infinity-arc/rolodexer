import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	constructor(private _dataService: DataService) {

	}

	getCards(): Promise<any> {
		return new Promise((resolve, reject) => {
			this._dataService.getCards((error, payload) => {
				if (error) {
					reject(error);
				}
				resolve(payload);
			})
		})
	}

}
