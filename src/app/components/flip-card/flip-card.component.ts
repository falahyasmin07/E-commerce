import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-flip-card',
	templateUrl: './flip-card.component.html',
	styleUrls: ['./flip-card.component.css'],
	imports: [CommonModule],
	animations: [
		trigger('cardFlip', [
			state('front', style({
				transform: 'rotateY(0deg)',
			})),
			state('back', style({
				transform: 'rotateY(180deg)',
			})),
			transition('front => back', animate('900ms ease-out')),
			transition('back => front', animate('900ms ease-in'))
		])
	]
})
export class FlipCardComponent implements OnInit, OnDestroy {
	@Input() images: string[] = [];
	@Input() interval: number = 3000;
	@Input() icon: string = '';
	@Input() title: string = '';
	@Input() alt: string = '';
	@Input() path: string = 'assets/images/{image}';

	currentImageIndex = 0;
	flipState: 'front' | 'back' = 'front';
	private intervalId: any;
	isFlipped: boolean = false;

	ngOnInit() {
		this.startCarousel();
	}

	startCarousel() {
		if (this.images.length > 1) {
			this.intervalId = setInterval(() => {
				this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
			}, this.interval);
		}
	}

	onHover() {
		this.flipState = 'back';
		setTimeout(() => { this.isFlipped = true }, 450);
		clearInterval(this.intervalId);
	}

	onLeave() {
		this.flipState = 'front';
		setTimeout(() => { this.isFlipped = false }, 450);
		this.startCarousel();
	}

	ngOnDestroy() {
		clearInterval(this.intervalId);
	}

	imagePath(index: number) {
		return this.path.replace('{image}', this.images[index]);
	}
}

