import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { Grahp1Component } from './grahp1/grahp1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    ProgressComponent,
    Grahp1Component,
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ComponentsModule,    
  ]
})
export class PagesModule { }
