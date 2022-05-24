import { Component } from '@angular/core';
import packageJson from 'src/../package.json';

@Component({
	selector: 'app-tabs',
	templateUrl: 'tabs.page.html',
	styleUrls: ['tabs.page.scss']
})
export class TabsPage {
	public version: string;

	constructor() {
		this.version = packageJson.version;
	}

}
