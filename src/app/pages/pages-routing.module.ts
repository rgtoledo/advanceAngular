import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grahp1Component } from './grahp1/grahp1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'graph1', component: Grahp1Component },
      { path: 'progress', component: ProgressComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
