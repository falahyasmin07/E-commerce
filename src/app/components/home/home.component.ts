import { Component } from '@angular/core';
import { SolutionsComponent } from 'src/app/components/solutions/solutions.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';

@Component({
  selector: 'app-home',
  imports: [AboutUsComponent, SolutionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
