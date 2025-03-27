import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-run-page',
  templateUrl: './run-page.component.html',
  styleUrls: ['./run-page.component.css'],
  imports: [HeroComponent]
})
export class RunPageComponent {

}
