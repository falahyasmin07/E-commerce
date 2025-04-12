import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var hbspt: any;

@Component({
	selector: 'app-contact-us',
	imports: [CommonModule, FormsModule],
	templateUrl: './contact-us.component.html',
	styleUrl: './contact-us.component.css'
})

export class ContactUsComponent implements OnInit {
	ngOnInit() {
	}

	onSubmit() {
		// TODO: Add here a POST request to submit collected data
		console.log('Form was submitted');
	}
}
