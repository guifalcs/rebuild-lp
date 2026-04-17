import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apresentacao', component: PresentationComponent },
  { path: '**', redirectTo: '' }
];
