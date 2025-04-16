import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
	sectors = [
		'EdgePulsarBox-1.jpg',
		'EdgePulsarBox-2.jpg',
		'EdgePulsarBox-3.jpg',
		'EdgePulsarBox-4.jpg',
		'EdgePulsarBox-5.jpg',
		'EdgePulsarBox-6.jpg',
	];
	interval: number = 5000;
	public counter: number = 0;
	intervalId: any;

	ngOnInit() {
		// Start counter
		this.intervalId = setInterval(() => {
			this.incrementCounter();
		}, this.interval);
	}

	incrementCounter() {
		this.counter++;
	}

	ngOnDestroy() {
		// Stop counter
		clearInterval(this.intervalId);
	}

	imagePath(index: number) {
		index = (index + this.counter) % this.sectors.length
		const sector = this.sectors[index];
		return `assets/images/${sector}`;
	}
}
