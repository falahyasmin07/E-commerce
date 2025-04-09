import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { BuildDeploySecureComponent } from './components/build-deploy-secure/build-deploy-secure.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroComponent, BuildDeploySecureComponent, CaseStudiesComponent, AboutUsComponent, ResourcesComponent, ContactUsComponent, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'edge-pulsar-website';
}
