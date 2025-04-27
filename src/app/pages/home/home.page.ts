import { Component } from '@angular/core';
import { SolutionsComponent } from 'src/app/components/solutions/solutions.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { OffersComponent } from 'src/app/components/offers/offers.component';

@Component({
  selector: 'app-page-home',
	imports: [
  		AboutUsComponent,
		ContactUsComponent,
		HeroComponent,
		OffersComponent,
		SolutionsComponent,
	],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {

}
