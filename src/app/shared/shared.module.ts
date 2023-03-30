import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    BreadCrumbsComponent,
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BreadCrumbsComponent,
    HeaderComponent,
    SideBarComponent,
  ]
})
export class SharedModule { }
