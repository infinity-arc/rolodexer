import { DataService } from './../services/data.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';


@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit {
	/* PROPERTIES */
	@ViewChild('swiper', { static: true }) swiper: SwiperComponent;
	cards: any[];
	error: unknown;
	leftButtonEnabled: boolean;
	rightButtonEnabled: boolean;
	/* CONSTRUCTOR */
	constructor(private _dataService: DataService) {
		this._getCards();
		this.leftButtonEnabled = true;
		this.rightButtonEnabled = true;

	}

	/* LIFE HOOKS */

	ngOnInit(): void {
		console.log('swiper: ', this.swiper);
	}

	ngAfterViewInit(): void {
		this.buttonControls();
	}

	/* METHODS */
	private _getCards() {
		this._dataService.getCards((error, payload) => {
			if (error) {
				this.error = error;
			}
			this.cards = payload;
		})
	}

	onDirectionalClick(direction: string) {
		this.swiper.swiperRef['slide' + direction]();
		this.buttonControls();
	}

	private buttonControls() {
		const elCount = this.swiper.swiperRef.slides.length - 1;
		const nextEl = this.swiper.swiperRef.activeIndex;
		if (elCount === nextEl) {
			this.deactivateRightButton();
			this.activateLeftButton();
		} else if (nextEl === 0) {
			this.activateRightButton();
			this.deactivateLeftButton();
		} else {
			this.activateLeftButton();
			this.activateRightButton();
		}
	}

	activateLeftButton = () => this.leftButtonEnabled = true;
	deactivateLeftButton = () => this.leftButtonEnabled = false;
	activateRightButton = () => this.rightButtonEnabled = true;
	deactivateRightButton = () => this.rightButtonEnabled = false;
}
