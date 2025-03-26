import { Routes } from '@angular/router';
import { BuildPageComponent } from './components/build-page/build-page.component';
import { RunPageComponent } from './components/run-page/run-page.component';
import { SecurePageComponent } from './components/secure-page/secure-page.component';

export const routes: Routes = [
  { path: 'build', component: BuildPageComponent },
  { path: 'run', component: RunPageComponent },
  { path: 'secure', component: SecurePageComponent }
];
