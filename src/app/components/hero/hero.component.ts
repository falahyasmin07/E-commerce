import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
	@Input() title: string = '';
	@Input() images: string[] = [];
	@Input() path: string = 'assets/images/{image}';
	@Input() alt:string = '';
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
		index = (index + this.counter) % this.images.length
		return this.path.replace('{image}', this.images[index]);
	}
}
