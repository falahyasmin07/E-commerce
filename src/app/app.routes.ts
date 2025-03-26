import { Routes } from '@angular/router';
import { BuildPageComponent } from './components/build-page/build-page.component';
import { RunPageComponent } from './components/run-page/run-page.component';
import { SecurePageComponent } from './components/secure-page/secure-page.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'build', component: BuildPageComponent },
  { path: 'run', component: RunPageComponent },
  { path: 'secure', component: SecurePageComponent }
];
