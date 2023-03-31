import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';

const routes: Routes = [

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'error', component: NotPageFoundComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
