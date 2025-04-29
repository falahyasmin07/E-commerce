import { Routes } from '@angular/router';
import { BuildPageComponent } from './components/build-page/build-page.component';
import { RunPageComponent } from './components/run-page/run-page.component';
import { SecurePageComponent } from './components/secure-page/secure-page.component';
import { IndustryPage } from './pages/industry/industry.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'build', component: BuildPageComponent },
  { path: 'industry-4.0', component: IndustryPage },
  { path: 'run', component: RunPageComponent },
  { path: 'secure', component: SecurePageComponent }
];
