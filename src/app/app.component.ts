import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { BuildDeploySecureComponent } from './components/build-deploy-secure/build-deploy-secure.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, BuildDeploySecureComponent, SolutionsComponent, CaseStudiesComponent, AboutUsComponent, ResourcesComponent, ContactUsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edge-pulsar-website';
}
