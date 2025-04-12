import { Component } from '@angular/core';
import { SolutionsComponent } from 'src/app/components/solutions/solutions.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  imports: [AboutUsComponent, ContactUsComponent, SolutionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
