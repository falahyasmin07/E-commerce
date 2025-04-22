import { Component } from '@angular/core';
import { FlipCardComponent } from 'src/app/components/flip-card/flip-card.component';

@Component({
	selector: 'app-offers',
	imports: [
		FlipCardComponent
	],
	templateUrl: './offers.component.html',
	styleUrl: './offers.component.css'
})
export class OffersComponent {
}
