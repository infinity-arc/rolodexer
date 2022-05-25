import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	constructor() {

	}

	ngOnInit(): void {
		environment.production && this.createGTag();
	}

	createGTag() {
		const createScriptTag = () => document.createElement('script');
		const scriptTagOne = createScriptTag();
		const scriptTagTwo = createScriptTag();

		scriptTagOne.async = true;
		scriptTagOne.src = 'https://www.googletagmanager.com/gtag/js?id=G-VZX1DVY5QL';
		scriptTagTwo.innerText = `
		window.dataLayer = window.dataLayer || []; const gtag = () => dataLayer.push(arguments);gtag('js', new Date());gtag('config', 'G-VZX1DVY5QL');
	  `
		document.head.appendChild(scriptTagOne);
		document.head.appendChild(scriptTagTwo);

		/*
	  <!-- Global site tag (gtag.js) - Google Analytics -->
	  <script async src="https://www.googletagmanager.com/gtag/js?id=G-VZX1DVY5QL"></script>
	  <script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-VZX1DVY5QL');
	  </script>
	  */
	}
}
