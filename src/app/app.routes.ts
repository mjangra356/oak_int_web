import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { AdmissionsComponent } from './pages/admissions/admissions';
import { NoticesComponent } from './pages/notices/notices';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

