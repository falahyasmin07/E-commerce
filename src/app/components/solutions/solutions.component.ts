import { Component } from '@angular/core';
import { FlipCardComponent } from 'src/app/components/flip-card/flip-card.component';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-solutions',
	imports: [
		FlipCardComponent,
		RouterModule,
	],
	templateUrl: './solutions.component.html',
	styleUrl: './solutions.component.css'
})
export class SolutionsComponent {

}
