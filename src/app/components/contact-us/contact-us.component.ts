import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgForm } from '@angular/forms';

declare var hbspt: any;

@Component({
	selector: 'app-contact-us',
	imports: [FormsModule, HttpClientModule],
	templateUrl: './contact-us.component.html',
	styleUrl: './contact-us.component.css'
})

export class ContactUsComponent implements OnInit {
	constructor(private http: HttpClient) {
	}

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		// Build the URL dynamically based on the current location
		const baseUrl = "https://edgepulsar.com"; //window.location.origin;
		const url = `${baseUrl}/actions/db_store.php`;
		console.log('Form to be submitted to BE server');
		// Send the form data to the PHP script
		console.log("data", form.value);
		this.http.post(url, form.value).subscribe(
			response => {
				console.log('Success!', response);
			},
			error => {
				console.error('Error!', error);
			}
		);
	}

	openMap() {
		window.open('https://www.google.com/maps/place/18+avenue+René+Descartes,+91080+Évry-Courcouronnes', 'Edge Pulsar Headquarters');
	}
}
