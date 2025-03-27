import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-secure-page',
  templateUrl: './secure-page.component.html',
  styleUrls: ['./secure-page.component.css'],
  imports: [HeroComponent]
})
export class SecurePageComponent {

}
