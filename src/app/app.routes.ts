import { Routes } from '@angular/router';
import { BuildPageComponent } from './components/build-page/build-page.component';
import { RunPageComponent } from './components/run-page/run-page.component';
import { SecurePageComponent } from './components/secure-page/secure-page.component';
import { AutomotivePage } from './pages/automotive/automotive.page';
import { ElectronicsPage } from './pages/electronics/electronics.page';
import { IndustryPage } from './pages/industry/industry.page';
import { LogisticsPage } from './pages/logistics/logistics.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'automotive', component: AutomotivePage },
  { path: 'electronics', component: ElectronicsPage },
  { path: 'industry-4.0', component: IndustryPage },
  { path: 'logistics', component: LogisticsPage },
  { path: 'run', component: RunPageComponent },
  { path: 'secure', component: SecurePageComponent }
];
